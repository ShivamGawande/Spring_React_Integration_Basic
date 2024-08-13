package com.springrest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.dao.CourseDAO;
import com.springrest.entity.Course;
import com.springrest.repository.CourseRepo;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseRepo courseRepo;
	@Override
	public List<Course> getCourses() {
		// TODO Auto-generated method stub
		return courseRepo.findAll();
	}

	@Override
	public Course getCourse(long couserId) {
		// TODO Auto-generated method stub
		return courseRepo.findById(couserId).get();
	}

	@Override
	public Course addCourse(CourseDAO course) {
		Course c=new Course();
		c.setId(course.getId());
		c.setDescripation(course.getDescripation());
		c.setTitle(course.getTitle());
		courseRepo.save(c);
		return c;
	}

	@Override
	public Course updateCourse(CourseDAO dao, Long id) {
		
		if(courseRepo.findById(id).isPresent()) {
			//Course c = new Course();
			Course c=courseRepo.findById(id).get();
			c.setId(id);
			c.setDescripation(dao.getDescripation());
			c.setTitle(dao.getTitle());
			courseRepo.save(c);
			return c;
		}
		return null;
	}

	@Override
	public void deleteCourse(Long id) {
		 courseRepo.deleteById(id);
	}
	
}
