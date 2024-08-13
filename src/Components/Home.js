import React, { useEffect } from "react";
import { Card, CardBody, Container, Button } from 'reactstrap';

const Home = () => {

  useEffect(()=>{
    document.title="Home || Learncodewith Shivam";
  },[])

  return (
    <Card>
      <CardBody className="text-center bg-secondary" >
        <h1 >Learn Code with Shivam</h1>
        <p>This is a Demo Development project where we try to use React and Spring Boot</p>
        <Container>
            <Button color="primary" outline>
                Start using
            </Button>
        </Container>
      </CardBody>
    </Card>
  );
}

export default Home;
