
import React from "react";
import './App.css';
import bootstrap from 'bootstrap';
import Button from './Button';
import { Alert, Card, Form, Container, Row, Col  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Container> 
        <Form>
          
          <Form.Group>
            <Form.Label> Enter your city: </Form.Label>
            <Form.Control placeholder="name of a city"/>
            <Form.Text className="text-muted"> 
            Nice spot!
            </Form.Text>
          </Form.Group>

        </Form>
        <Card className="mb-3" style={{ color: "#000"}}>
          <Card.Img src="https://www.fws.gov/refuges/friends/friendsLocatorMaps/images/USmap.gif" />
          <Card.Body>
            <Card.Title> Title</Card.Title>
              <Card.Text> This is an example</Card.Text>
              <Button variant="primary">Read More</Button>
           </Card.Body>   
        </Card>  
        
        <Alert variant="success">This is a button</Alert>
        <Button /> 
        </Container>
      </header>
  
    </div>

  );
}

export default App;
