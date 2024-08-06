package com.example.demo.service;

import com.example.demo.model.TimeTable;
import com.example.demo.repository.TimeTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TimeTableService {

    @Autowired
    private TimeTableRepository timeTableRepository;

    public List<TimeTable> getAllTimeTables() {
        return timeTableRepository.findAll();
    }

    public Optional<TimeTable> getTimeTable(Long id) {
        return timeTableRepository.findById(id);
    }

    public TimeTable saveTimeTable(TimeTable timeTable) {
        return timeTableRepository.save(timeTable);
    }

    public Optional<TimeTable> updateTimeTable(Long id, TimeTable updatedTimeTable) {
        return timeTableRepository.findById(id)
                .map(existingTimeTable -> {
                    existingTimeTable.setDay(updatedTimeTable.getDay());
                    existingTimeTable.setTimeSlot(updatedTimeTable.getTimeSlot());
                    existingTimeTable.setCourse(updatedTimeTable.getCourse());
                    existingTimeTable.setTeacher(updatedTimeTable.getTeacher());
                    return timeTableRepository.save(existingTimeTable);
                });
    }
}
