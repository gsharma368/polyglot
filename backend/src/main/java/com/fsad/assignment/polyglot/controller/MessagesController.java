package com.fsad.assignment.polyglot.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Arrays;
import java.util.List;
import org.springframework.http.ResponseEntity;
@RestController
public class MessagesController {

    @CrossOrigin(origins = "*")
    @GetMapping("/messages")
    public ResponseEntity<List<String>> messages() {

        return ResponseEntity.ok(Arrays.asList("first", "second"));
    }
}
