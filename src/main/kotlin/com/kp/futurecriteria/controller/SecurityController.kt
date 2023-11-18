package com.kp.futurecriteria.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class SecurityController {
    @GetMapping("/redirectAfterLogin")
    fun redirectAfterLogin(): String {
        return "redirect:http://localhost:3000/homepage"
    }
}