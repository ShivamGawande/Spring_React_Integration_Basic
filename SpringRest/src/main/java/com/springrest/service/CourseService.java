package com.springrest.service;

import java.util.List;

import com.springrest.dao.CourseDAO;
import com.springrest.entity.Course;

public interface CourseService {
	public List<Course> getCourses();

	public Course getCourse(long couserId);

	public Course addCourse(CourseDAO course);

	public Course updateCourse(CourseDAO dao, Long id);

	public void deleteCourse(Long id);
}
