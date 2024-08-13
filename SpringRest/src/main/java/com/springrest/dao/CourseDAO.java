package com.springrest.dao;

public class CourseDAO {
	private Long id;
	private String title;
	private String descripation;
	public CourseDAO(Long id, String title, String descripation) {
		super();
		this.id = id;
		this.title = title;
		this.descripation = descripation;
	}
	public CourseDAO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescripation() {
		return descripation;
	}
	public void setDescripation(String descripation) {
		this.descripation = descripation;
	}
	@Override
	public String toString() {
		return "Course [id=" + id + ", title=" + title + ", descripation=" + descripation + "]";
	}
}
