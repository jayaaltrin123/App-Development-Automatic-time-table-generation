import React, { useState } from 'react';
import './GenTable.css'
import TimeTable from './TimeTable.jsx';

const GenTable = ({ courses, teachers }) => {
    const [day, setDay] = useState('');
    const [timeSlot, setTimeSlot] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');
    const [selectedTeacher, setSelectedTeacher] = useState('');
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const timeSlots = [
        '9:00 AM - 10:00 AM',
        '10:00 AM - 11:00 AM',
        '11:00 AM - 12:00 PM',
        '12:00 PM - 1:00 PM',
        '1:00 PM - 2:00 PM',
        '2:00 PM - 3:00 PM',
        '3:00 PM - 4:00 PM',
        '4:00 PM - 5:00 PM',
    ];

    const [schedule, setSchedule] = useState(
        Array(timeSlots.length).fill(Array(days.length).fill('NA'))
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        const dayIndex = days.indexOf(day);
        const timeSlotIndex = timeSlots.indexOf(timeSlot);
        if (dayIndex !== -1 && timeSlotIndex !== -1) {
            const updatedSchedule = schedule.map((row, i) =>
                i === timeSlotIndex
                    ? row.map((cell, j) => (j === dayIndex ? `${selectedCourse} (${selectedTeacher})` : cell))
                    : row
            );
            setSchedule(updatedSchedule);
        }
        // Reset form fields after submission
        setDay('');
        setTimeSlot('');
        setSelectedCourse('');
        setSelectedTeacher('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add Time Table!!!</h2>
                <div>
                    <label>Select Day</label>
                    <select value={day} onChange={(e) => setDay(e.target.value)}>
                        <option value="" disabled>Select Day</option>
                        {days.map((day) => (
                            <option key={day} value={day}>
                                {day}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Select Time Slot</label>
                    <select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)}>
                        <option value="" disabled>Select Time Slot</option>
                        {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                                {slot}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Select Course</label>
                    <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
                        <option value="" disabled>Select Course</option>
                        {courses.map((course) => (
                            <option key={course.id} value={course.name}>
                                {course.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Select Teacher</label>
                    <select value={selectedTeacher} onChange={(e) => setSelectedTeacher(e.target.value)}>
                        <option value="" disabled>Select Teacher</option>
                        {teachers.map((teacher, index) => (
                            <option key={index} value={`${teacher.firstName} ${teacher.lastName}`}>
                                {teacher.firstName} {teacher.lastName}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Add</button>
            </form>
            <TimeTable schedule={schedule} />
        </div>
    );
};

export default GenTable;
