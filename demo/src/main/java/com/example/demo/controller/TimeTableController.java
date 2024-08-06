package com.example.demo.controller;

import com.example.demo.model.TimeTable;
import com.example.demo.service.TimeTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/timetable")
public class TimeTableController {

    @Autowired
    private TimeTableService timeTableService;

    @GetMapping
    public ResponseEntity<List<TimeTable>> getAllTimeTables() {
        List<TimeTable> timeTables = timeTableService.getAllTimeTables();
        return ResponseEntity.ok(timeTables);
    }

    @PostMapping
    public ResponseEntity<TimeTable> createTimeTable(@RequestBody TimeTable timeTable) {
        TimeTable savedTimeTable = timeTableService.saveTimeTable(timeTable);
        return ResponseEntity.ok(savedTimeTable);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TimeTable> getTimeTable(@PathVariable Long id) {
        Optional<TimeTable> timeTable = timeTableService.getTimeTable(id);
        return timeTable.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<TimeTable> updateTimeTable(@PathVariable Long id, @RequestBody TimeTable updatedTimeTable) {
        Optional<TimeTable> timeTable = timeTableService.updateTimeTable(id, updatedTimeTable);
        return timeTable.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
