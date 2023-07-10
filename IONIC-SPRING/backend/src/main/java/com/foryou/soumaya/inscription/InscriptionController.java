package com.foryou.soumaya.inscription;

import com.foryou.soumaya.sender.RegistrationEvent;
import com.foryou.soumaya.sender.listener.SendMail;
import com.foryou.soumaya.inscription.password.MotdepasseOublie;
import com.foryou.soumaya.inscription.token.VerificationToken;
import com.foryou.soumaya.inscription.token.VerificationTokenRepository;
import com.foryou.soumaya.springsecurity.InscriptionDetails;
import com.foryou.soumaya.user.User;
import com.foryou.soumaya.user.UserService;
import jakarta.mail.MessagingException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/inscription")
@CrossOrigin("*")
public class InscriptionController {

    private final UserService userService;
    private final ApplicationEventPublisher publisher;
    private final VerificationTokenRepository tokenRepository;
    private final SendMail eventListener;

    @PostMapping
    public String registerUser(@RequestBody InscriptionRequest registrationRequest, final HttpServletRequest request) {
        User user = userService.registerUser(registrationRequest);
        publisher.publishEvent(new RegistrationEvent(user, applicationUrl(request)));
        return "Bravo ! check your e-mail pour finaliser votre inscription";
    }

    @GetMapping("/verifieremail")
    public String verifyEmail(@RequestParam("token") String token) {
        VerificationToken theToken = tokenRepository.findByToken(token);
        if (theToken.getUser().isEnabled()) {
            return "Ce compte a déjà été vérifié, merci de se connecter.";
        }
        String verificationResult = userService.validateToken(token);
        if (verificationResult.equalsIgnoreCase("valid")) {
            return "Email vérifié avec succès, vous pouvez maintenant se connecter";
        }
        return "Token de vérification invalid";
    }

    @PostMapping("/motdepasseoublie")
    public String resetPasswordRequest(@RequestBody MotdepasseOublie passwordResetRequest,
                                       final HttpServletRequest request) throws MessagingException, UnsupportedEncodingException {
        Optional<User> user = userService.findByEmail(passwordResetRequest.getEmail());

        String passwordResetUrl = "";
        if (user.isPresent()) {
            String passwordResetToken = UUID.randomUUID().toString();
            userService.createPasswordResetTokenForUser(user.get(), passwordResetToken);
            System.out.println("confirmed password : "+passwordResetRequest.getConfirmPassword());
            passwordResetUrl = passwordResetEmailLink(user.get(), applicationUrl(request), passwordResetToken,passwordResetRequest.getConfirmPassword());
        }
        return passwordResetUrl;
    }

    private String passwordResetEmailLink(User user, String applicationUrl, String passwordResetToken,String pw) throws MessagingException, UnsupportedEncodingException {
        String url = applicationUrl + "/inscription/nouveaumdp?token=" + passwordResetToken+"&email="+user.getEmail()+"&newPassword="+pw+"&confirmPassword="+pw;
        eventListener.sentPasswordResetVerificationEmail(user,url);
        log.info("Cliquez ici pour renouvellez votre mot de passe : {}", url);
        return url;
    }

    @GetMapping("/nouveaumdp")
    public String resetPassword(
                                @RequestParam("token") String passwordResetToken,
                                @RequestParam String email,
                                @RequestParam String newPassword,
                                @RequestParam String confirmPassword) {
        System.out.println("after all"+newPassword);
        MotdepasseOublie motdepasseOublie=new MotdepasseOublie(email,newPassword,confirmPassword);
        String tokenValidationResult = userService.validatePasswordResetToken(passwordResetToken);
        if (!tokenValidationResult.equalsIgnoreCase("valid")) {
            return "Token invalid";
        }
        User user = userService.findUserByPasswordToken(passwordResetToken);
        if (user != null) {
            userService.resetUserPassword(user, newPassword);
            return "Le mot de passe a été reinsialisé avec succès";
        }
        return "Token pour réinsialiser le mot de passe est invalide";
    }

    public String applicationUrl(HttpServletRequest request) {
        return "http://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();
    }
    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> loginUser(@RequestBody LoginRequest loginRequest) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        User user = userService.loginUser(email, password);

        if (user != null) {
            Map<String, String> response = new HashMap<>();
            response.put("accessToken", user.getAccessToken());
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

}
