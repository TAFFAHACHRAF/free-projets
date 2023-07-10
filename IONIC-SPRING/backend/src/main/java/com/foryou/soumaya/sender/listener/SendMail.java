package com.foryou.soumaya.sender.listener;

import com.foryou.soumaya.sender.RegistrationEvent;
import com.foryou.soumaya.user.User;
import com.foryou.soumaya.user.UserService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationListener;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import java.io.UnsupportedEncodingException;
import java.util.Random;
import java.util.UUID;



@Slf4j
@Component
@RequiredArgsConstructor
public class SendMail implements ApplicationListener<RegistrationEvent> {
 private final UserService userService;

 private final JavaMailSender mailSender;
 private User theUser;
    @Override
    public void onApplicationEvent(RegistrationEvent event) {
        theUser = event.getUser();
        String verificationToken = UUID.randomUUID().toString();
        userService.saveUserVerificationToken(theUser, verificationToken);
        String url = event.getApplicationUrl()+"/inscription/verifieremail?token="+verificationToken;
        try {
            sendVerificationEmail(url);
        } catch (MessagingException | UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }
        log.info("Cliquez sur le lien pour vérifier votre inscription :  {}", url);
    }
    public void sendVerificationEmail(String url) throws MessagingException, UnsupportedEncodingException {
        String subject = "Verification d'email";
        String senderName = "Verify your account : ";
        int min = 100;
        int max = 10000;
        Random random = new Random();
        int code = random.nextInt(max - min + 1) + min;
        String mailContent = "<p> The code is "+code+"\nHey, "+ theUser.getFirstName()+ ", </p>"+
                "<p>merci pour votre souscription,"+"" +
                "merci de suivre les instructions pour finaliser votre inscription.</p>"+
                "<a href=\"" +url+ "\">Verifiez votre email pour activer votre compte</a>"+
                "<p> Merci <br> For you project";
        MimeMessage message = mailSender.createMimeMessage();
        var messageHelper = new MimeMessageHelper(message);
        messageHelper.setFrom("soumayapfe@gmail.com", senderName);
        messageHelper.setTo(theUser.getEmail());
        messageHelper.setSubject(subject);
        messageHelper.setText(mailContent, true);
        mailSender.send(message);
    }

    public void sentPasswordResetVerificationEmail(User user,String url) throws MessagingException, UnsupportedEncodingException {
        String subject = "Réinsialiser votre mot de passe";
        String senderName = "For you";
        String mailContent = "<p> Hey, "+ user.getFirstName()+ ", </p>"+
                "<p>Vous avez demandé à reinsialiser votre mot de passe,"+"" +
                "Merci de suivre les instructions.</p>"+
                "<a href=\"" +url+ "\">Réinsialiser le mot de passe</a>"+
                "<p> For you project";
        MimeMessage message = mailSender.createMimeMessage();
        var messageHelper = new MimeMessageHelper(message);
        messageHelper.setFrom("soumayapfe@gmail.com", senderName);
        messageHelper.setTo(user.getEmail());
        messageHelper.setSubject(subject);
        messageHelper.setText(mailContent, true);
        mailSender.send(message);
    }
}
