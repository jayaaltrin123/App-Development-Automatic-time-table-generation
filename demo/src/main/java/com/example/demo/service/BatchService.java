package com.example.demo.service;

import com.example.demo.model.Batch;
import com.example.demo.model.Grade;
import com.example.demo.repository.BatchRepository;
import com.example.demo.repository.GradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BatchService {

    @Autowired
    private BatchRepository batchRepository;

    @Autowired
    private GradeRepository gradeRepository;

    public Batch addBatch(Batch batch) {
        return batchRepository.save(batch);
    }

    public List<Batch> getAllBatches() {
        return batchRepository.findAll();
    }

    public Grade getGradeByName(String name) {
        return gradeRepository.findByName(name);
    }
}