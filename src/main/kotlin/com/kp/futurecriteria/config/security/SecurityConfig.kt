package com.kp.futurecriteria.config.security

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.provisioning.InMemoryUserDetailsManager
import org.springframework.security.web.SecurityFilterChain


@Configuration
@EnableWebSecurity
class SecurityConfig {
    @Bean
    fun inMemoryUserDetailsManager(): InMemoryUserDetailsManager {
        val user1: UserDetails = User.withUsername("user1")
                .password(passwordEncoder().encode("user1"))
                .roles("USER")
                .build()
        val user2: UserDetails = User.withUsername("user2")
                .password(passwordEncoder().encode("user1"))
                .roles("USER")
                .build()
        val admin: UserDetails = User.withUsername("admin")
                .password(passwordEncoder().encode("admin"))
                .roles("ADMIN")
                .build()
        return InMemoryUserDetailsManager(user1, user2, admin)
    }
    @Bean
    fun filterChain(http: HttpSecurity): SecurityFilterChain =
        http.csrf { csrf -> csrf.disable() }
            .authorizeRequests{auth -> auth
                    .requestMatchers("/admin/**").hasRole("ADMIN")
                    .requestMatchers("/login*").permitAll()
                    .anyRequest().authenticated()
            }
            .formLogin { formLogin -> formLogin
                .loginProcessingUrl("/perform_login")
                .defaultSuccessUrl("/redirectAfterLogin", true)
                .failureUrl("/login.html?error=true")}
            .logout { logout -> logout
                    .logoutUrl("/perform_logout")
                    .deleteCookies("JSESSIONID") }
            .build()
    @Bean
    fun passwordEncoder(): PasswordEncoder {
        return BCryptPasswordEncoder()
    }
}