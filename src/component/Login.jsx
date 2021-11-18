import React from "react";
import {Form,Button} from "react-bootstrap";

export const Login = () => {
  return (
    <>
    <div className="container" style={{boxShadow:"5px 5px 20px green", width:"50rem",marginTop:"5rem",padding:"5rem"}}>
      <Form>
        <Form.Group controlId="formBasicEmail" >
          <Form.Label>EMPLOYEE ID</Form.Label>
          <Form.Control type="email" placeholder="Enter Employee Id" />
          <Form.Text className="text-muted">
            We'll never share your Id with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" style={{background:"green"}}>
          Login
        </Button>
      </Form>
      </div>
    </>
  );
};
