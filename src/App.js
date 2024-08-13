//import logo from './logo.svg';
import './App.css';
import { Button,Col,Container, Row } from 'reactstrap';
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer, toast } from 'react-toastify'
import Home from './Components/Home';
import Course from './Components/Course';
import AllCourses from './Components/AllCourses';
import AddCourse from './Components/AddCourse';
import Header from './Components/Header'
import Menus from './Components/Menus';
import {BrowserRouter as Router,Route, Routes}from 'react-router-dom'


function App() {
  const btnHandle = ()=>
    {
    toast.error("done",{
      position:'top-center'
    }
     
    );
  };
  return (
    
    <div>
      <Router>
        <ToastContainer/>
        <Container>
          <Header/>
          <Row>
            <Col md={4}>
             <Menus/>
            </Col>
            <Col md={8}>
             <Routes>
             <Route path='/' Component={Home} exact/>
             <Route path='/add-course' Component={AddCourse} exact/>
             <Route path='/view-courses' Component={AllCourses} exact/>
             </Routes>
           </Col>
          </Row>
        </Container>
        </Router>
    </div>

  );
}

export default App;
