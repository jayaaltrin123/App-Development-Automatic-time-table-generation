package com.example.demo.controller;

import com.example.demo.model.Batch;
import com.example.demo.model.Grade;
import com.example.demo.service.BatchService;
import com.example.demo.service.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/batches")
public class BatchController {

    @Autowired
    private BatchService batchService;

    @Autowired
    private GradeService gradeService;

    @PostMapping
    public ResponseEntity<Batch> addBatch(@RequestBody Batch batch) {
        Grade grade = gradeService.getGradeByName(batch.getGrade().getName());
        if (grade != null) {
            batch.setGrade(grade);
            Batch savedBatch = batchService.addBatch(batch);
            return ResponseEntity.ok(savedBatch);
        }
        return ResponseEntity.status(404).body(null);
    }

    @GetMapping
    public ResponseEntity<List<Batch>> getAllBatches() {
        List<Batch> batches = batchService.getAllBatches();
        return ResponseEntity.ok(batches);
    }
}