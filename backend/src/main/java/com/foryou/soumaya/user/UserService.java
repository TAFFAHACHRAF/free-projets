package com.foryou.soumaya.user;

import com.foryou.soumaya.exception.UtilisateurExisteDeja;
import com.foryou.soumaya.inscription.InscriptionRequest;
import com.foryou.soumaya.inscription.password.MotdepasseTokenService;
import com.foryou.soumaya.inscription.token.VerificationToken;
import com.foryou.soumaya.inscription.token.VerificationTokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.List;
import java.util.Optional;
import java.util.UUID;


@Service
@RequiredArgsConstructor
public class UserService implements IUserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final VerificationTokenRepository tokenRepository;
    private final MotdepasseTokenService passwordResetTokenService;

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public User registerUser(InscriptionRequest request) {
       Optional<User> user = this.findByEmail(request.email());
       if (user.isPresent()){
           throw new UtilisateurExisteDeja(
                   "User avec e-mail "+request.email() + " existe déjà");
       }
       var newUser = new User();
       newUser.setFirstName(request.firstName());
       newUser.setLastName(request.lastName());
        newUser.setEmail(request.email());
        newUser.setBirthday(request.birthday());
       newUser.setPassword(passwordEncoder.encode(request.password()));
       newUser.setRole(request.role());
        return userRepository.save(newUser);
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public void saveUserVerificationToken(User theUser, String token) {
        var verificationToken = new VerificationToken(token, theUser);
        tokenRepository.save(verificationToken);
    }

    @Override
    public String validateToken(String theToken) {
        VerificationToken token = tokenRepository.findByToken(theToken);
        if(token == null){
            return "Token invalid";
        }
        User user = token.getUser();
        Calendar calendar = Calendar.getInstance();
        if ((token.getExpirationTime().getTime() - calendar.getTime().getTime()) <= 0){
            tokenRepository.delete(token);
            return "Token a expiré";
        }
        user.setEnabled(true);
        userRepository.save(user);
        return "valid";
    }
    @Override
    public void createPasswordResetTokenForUser(User user, String passwordToken) {
        passwordResetTokenService.createPasswordResetTokenForUser(user, passwordToken);
    }

    @Override
    public String validatePasswordResetToken(String passwordResetToken) {
        return passwordResetTokenService.validatePasswordResetToken(passwordResetToken);
    }

    @Override
    public User findUserByPasswordToken(String passwordResetToken) {
        return passwordResetTokenService.findUserByPasswordToken(passwordResetToken).get();
    }

    @Override
    public void resetUserPassword(User user, String newPassword) {
        System.out.println("The password after encoding is : "+newPassword);
        user.setPassword(passwordEncoder.encode(newPassword));
        System.out.println("The password before encoding is : "+user.getPassword());
        userRepository.save(user);
    }

    @Override
    public User loginUser(String email, String password) {
        Optional<User> userOptional = userRepository.findByEmail(email);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (passwordEncoder.matches(password, user.getPassword())) {
                // Generate and set the access token
                String accessToken = generateAccessToken();
                user.setAccessToken(accessToken);
                userRepository.save(user);

                return user;
            }
        }
        return null;
    }

    private String generateAccessToken() {
        // Generate and return an access token using a suitable mechanism
        // For example, you can use UUID.randomUUID().toString() to generate a random token
        return UUID.randomUUID().toString();
    }
}
