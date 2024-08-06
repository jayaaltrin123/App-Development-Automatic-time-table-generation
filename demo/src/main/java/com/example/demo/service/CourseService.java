package com.example.demo.service;

import com.example.demo.model.Course;
import com.example.demo.model.Grade;
import com.example.demo.repository.CourseRepository;
import com.example.demo.repository.GradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private GradeRepository gradeRepository;

    public Course addCourse(Course course) {
        return courseRepository.save(course);
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Grade getGradeByName(String name) {
        return gradeRepository.findByName(name);
    }
}