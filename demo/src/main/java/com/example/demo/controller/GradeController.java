package com.example.demo.controller;

import com.example.demo.model.Grade;
import com.example.demo.service.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/grades")
public class GradeController {

    @Autowired
    private GradeService gradeService;

    @PostMapping
    public ResponseEntity<String> addGrade(@RequestBody Grade grade) {
        if (grade.getName() == null || grade.getDescription() == null) {
            return ResponseEntity.badRequest().body("Grade name and description are required");
        }

        try {
            Grade savedGrade = gradeService.addGrade(grade);
            return ResponseEntity.ok("Grade added successfully: " + savedGrade);
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.status(400).body("Data integrity violation: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Internal server error: " + e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<List<Grade>> getAllGrades() {
        List<Grade> grades = gradeService.getAllGrades();
        return ResponseEntity.ok(grades);
    }
}
