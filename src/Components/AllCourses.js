import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css';
import Course from './Course';
import base_url from '../api/bootapi';
import axios from 'axios';

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); // Flag to track if courses are loaded

  useEffect(() => {
    document.title = "All Courses";
    if (!isLoaded) {
      getAllCoursesFromServer();
    }
  }, []); // Run effect only once when component mounts

  const getAllCoursesFromServer = async () => {
    try {
      const response = await axios.get(`${base_url}/courses`);
      setCourses(response.data);
      setIsLoaded(true); // Set isLoaded to true after courses are loaded
    } catch (error) {
      console.error("There was an error fetching the courses!", error);
      toast.error("Failed to load courses"); // Display error message if there's an error while fetching courses
    }
  };

  useEffect(() => {
    if (isLoaded) {
      toast.success("Courses have been loaded"); // Display success message only once when courses are loaded for the first time
    }
  }, [isLoaded]); // Run effect when isLoaded changes

  const updateCourses=(id)=>{
    setCourses(courses.filter((c)=>c.id!=id))
  }
  return (
    <div>
      <h1>All Courses</h1>
      <p>List Of Courses are as follows:</p>
      {
        courses.length > 0 ? 
        courses.map((item) => <Course key={item.id} course={item} update={updateCourses}/>) :
        "No courses"
      }
    </div>
  );
}

export default AllCourses;
