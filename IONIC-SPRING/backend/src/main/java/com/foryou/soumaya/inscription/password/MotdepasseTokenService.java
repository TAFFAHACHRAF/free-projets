package com.foryou.soumaya.inscription.password;

import com.foryou.soumaya.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MotdepasseTokenService {

    private final MotdePasseTokenRepository passwordResetTokenRepository;
    public void createPasswordResetTokenForUser(User user, String passwordToken) {
        MotdepasseToken passwordResetToken = new MotdepasseToken(passwordToken, user);
        passwordResetTokenRepository.save(passwordResetToken);
    }
    public String validatePasswordResetToken(String theToken) {

            MotdepasseToken token = passwordResetTokenRepository.findByToken(theToken);
            if(token == null){
                return "Token pour réinsialiser le mot de passe invalid";
            }
            User user = token.getUser();
            Calendar calendar = Calendar.getInstance();
            if ((token.getExpirationTime().getTime() - calendar.getTime().getTime()) <= 0){
                return "Le lien a expiré, envoyez un nouveau mail";
            }
            return "valid";
        }

        public Optional<User> findUserByPasswordToken(String passwordToken) {
            return Optional.ofNullable(passwordResetTokenRepository.findByToken(passwordToken).getUser());
        }
}
