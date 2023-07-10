package com.foryou.soumaya.user;

import com.foryou.soumaya.inscription.InscriptionRequest;

import java.util.List;
import java.util.Optional;



public interface IUserService {
    List<User> getUsers();
    User registerUser(InscriptionRequest request);
    Optional<User> findByEmail(String email);

    void saveUserVerificationToken(User theUser, String verificationToken);

    String validateToken(String theToken);

    void createPasswordResetTokenForUser(User user, String passwordToken);

    String validatePasswordResetToken(String passwordResetToken);

    User findUserByPasswordToken(String passwordResetToken);

    void resetUserPassword(User user, String newPassword);
    User loginUser(String email, String password) ;
}
