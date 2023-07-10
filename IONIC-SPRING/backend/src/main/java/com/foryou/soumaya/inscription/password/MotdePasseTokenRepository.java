package com.foryou.soumaya.inscription.password;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MotdePasseTokenRepository extends JpaRepository<MotdepasseToken, Long> {
    MotdepasseToken findByToken(String theToken);
}
