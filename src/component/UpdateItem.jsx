import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const UpdateItem = ({ setEditing, currentItem, updateItem }) => {
  const [item, setItem] = useState(currentItem);

  useEffect(() => {
    setItem(currentItem);
    console.log("useEffect passes the currentItem: ", currentItem);
  }, [currentItem]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit passes the id and items", item);
    updateItem({ currentItem }, item);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  return (
    <>
      <div className="container">
        <Alert variant="success">
          <Alert.Heading>UPDATE HERE!</Alert.Heading>
        </Alert>

        <Form onSubmit={onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Update Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Update Email"
              name="email"
              value={item.email}
              onChange={onChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="Update Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Update Name"
              name="name"
              value={item.name}
              onChange={onChange}
              required
            />
          </Form.Group>

          <button
            style={{
              background: "green",
              padding: "7px",
              color: "white",
              borderRadius: "4px",
              border: "none",
            }}
          >
            Update
          </button>

          <Button variant="success" onClick={() => setEditing(false)}>
            Cancel
          </Button>
        </Form>
      </div>
    </>
  );
};
export default UpdateItem;
