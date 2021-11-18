import React from "react";
import {Card} from 'react-bootstrap';

const Cards = (props) => {
  
  return (
    <>   
      <Card style={{ width: "400px", height: "200px" ,borderRadius:"10px",boxShadow:"5px 5px 20px #7f8c8d"}} onClick={props.func}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
