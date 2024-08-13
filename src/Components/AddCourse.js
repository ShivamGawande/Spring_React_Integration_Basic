import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { Form,FormGroup,Input,Container, Button } from 'reactstrap';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css';

const AddCourse = () => {
  useEffect(()=>{
    document.title="AddCourse || Learncodewith Shivam";
  },[])

  const [course,setCourse]=useState({});

  //form handler function
  const handleForm=(e)=>{
    console.log(course);
    postDataToServer(course);
    e.preventDefault();
  };

  //creating function to post data on server
  const postDataToServer=(data)=>{
    axios.post(`${base_url}/courses`,data).then(
      (response)=>{
        console.log(response)
        console.log("success")
        toast.success("Course added Successfully")
        setCourse({id:"",title:"",descripation:""})
      },(error)=>{
        console.log(error)
        console.log("error")
        toast.error("something went wrong")
      }
    )
  };

  return (
    <div>
      <h1 className='text-center my-3'>Fill Course Details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
            <label htmlFor="userId" >Course Id</label>
            <Input type='text' placeholder='Enter here' name='userId' id='userId'
            onChange={(e)=>{
              setCourse({...course,id:e.target.value})
            }}/>
        </FormGroup>
        <FormGroup>
          <label htmlFor="title" >Course Title</label>
            <Input type='text' placeholder='Enter title here' id='title'
            onChange={(e)=>{
              setCourse({...course,title:e.target.value})
            }}/>
        </FormGroup>
        <FormGroup>
            <label htmlFor="description">Course Description</label>
            <Input type='textarea' placeholder='Enter description' id='description'  style={{height:100}}
            onChange={(e)=>{
              setCourse({...course,descripation:e.target.value})
            }}/>
        </FormGroup>

        <Container className='text-center'>
            <Button type='submit' color='success me-2'>
                Add Courser
            </Button>
            <Button type='reset' color='warning' onClick={()=>{
              setCourse({id:"",title:"",descripation:""})
            }} >
                Clear
            </Button>
        </Container>
      </Form>
    </div>
  )
}

export default AddCourse
