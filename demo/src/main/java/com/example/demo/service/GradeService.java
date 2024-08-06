package com.example.demo.service;

import com.example.demo.model.Grade;
import com.example.demo.repository.GradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GradeService {

    @Autowired
    private GradeRepository gradeRepository;

    public Grade getGradeByName(String name) {
        return gradeRepository.findByName(name);
    }
}
