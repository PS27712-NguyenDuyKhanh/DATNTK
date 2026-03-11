package com.phonestore.controller;

import com.phonestore.dto.UpdateUserRequest;
import com.phonestore.entity.User;
import com.phonestore.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // lấy profile
    @GetMapping("/profile/{id}")
    public User getProfile(@PathVariable Long id) {
        return userRepository.findById(id).orElse(null);
    }

    // update thông tin
    @PutMapping("/update/{id}")
    public User updateUser(@PathVariable Long id,
                           @RequestBody UpdateUserRequest req) {

        User user = userRepository.findById(id).orElseThrow();

        user.setUsername(req.getUsername());
        user.setPhone(req.getPhone());
        user.setAddress(req.getAddress());

        return userRepository.save(user);
    }
}