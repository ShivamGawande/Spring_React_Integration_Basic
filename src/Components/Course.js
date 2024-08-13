import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardFooter, Button, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';

const Course = ({course,update}) => {

  const  deleteCourse=(id)=>{
    axios.delete(`${base_url}/courses/${id}`).then(
      (response)=>{
        toast.success("Course is deleted");
        update(id)
      },
      (error)=>{
        toast.error("Course is not deleted, Server problem")
      }
    )
  }

  return (
    <Card className="my-3 text-center">
      <CardBody>
        <CardSubtitle className="fw-bold mb-2">
          {course.title}
        </CardSubtitle>
        <CardText>{course.descripation}</CardText>
        <Container className="text-center">
          <Button color="danger" className="me-2" onClick={()=>{
            deleteCourse(course.id)
          }}>Delete</Button>
          <Button color="warning ml=3">Update</Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
