package com.example.demo.controller;

import com.example.demo.model.Course;
import com.example.demo.model.Grade;
import com.example.demo.service.CourseService;
import com.example.demo.service.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @Autowired
    private GradeService gradeService;

    @PostMapping
    public ResponseEntity<Course> addCourse(@RequestBody Course course) {
        Grade grade = gradeService.getGradeByName(course.getGrade().getName());
        if (grade != null) {
            course.setGrade(grade);
            Course savedCourse = courseService.addCourse(course);
            return ResponseEntity.ok(savedCourse);
        }
        return ResponseEntity.status(404).body(null);
    }

    @GetMapping
    public ResponseEntity<List<Course>> getAllCourses() {
        List<Course> courses = courseService.getAllCourses();
        return ResponseEntity.ok(courses);
    }
}