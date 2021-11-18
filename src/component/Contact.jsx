import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuid } from "uuid";
import emailjs from "emailjs-com";
import firebase from "../firebase";
import "firebase/firebase-auth";
import { db } from "../firebase";
import firebaseauth from "../firebase";
import logo from "./logo.png";
export const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [uid, setUid] = useState();
  const [fileurl, setFileurl] = useState();

  const handleChange = async (e) => {
    const upload = e.target.files[0];
    const id = uuid();
    const storageref = firebase.storage().ref();
    const fileref=storageref.child(upload.name);
    await fileref.put(upload);
      setFileurl(await fileref.getDownloadURL(upload.name));
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if (email && name) {
      emailjs
        .sendForm(
          "gmail",
          "template_skufj9s",
          e.target,
          "user_MgwxMvgJeg82JEETE1U1D"
        )
        .then((result) => {
          toast.success(result.text);
        })
        .catch((error) => {
          toast.success(error.text);
        });

      db.collection("list-data")
        .add({
          email: email,
          name: name,
          file: fileurl,
        })
        .then(() => {
          firebaseauth.auth().onAuthStateChanged(function (user) {
            if (user) {
              user = firebaseauth.auth().currentUser;
              if (user != null) {
                user = user.email;
              } else {
              }
            }
          });

          var useremail = email;
          console.log(email);
          var username = name;
          console.log(name);
          firebaseauth
            .auth()
            .createUserWithEmailAndPassword(useremail, username)
            .then((userdata) => {
              console.log(userdata.user);
              setUid(userdata.user.uid);
              userdata.user.sendEmailVerification().then(() => {
                // alert("success");
                toast.success("Email send successfully!!!");
                console.log(userdata.user);
              });
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          alert(error);
        });

      setEmail("");
      setName("");
    } else {
      toast.dismiss("please fill the details!!!");
    }
  };

  const showToast = () => {
    if (email && name) {
      toast.success("DATA ADDED SUCCESSFULLY!!!");
    }
  };

  return (
    <>
      <div className="container">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <h1>
          <img src={logo} alt="logo_error" width="100px" />
        </h1>
        <h6>{uid}</h6>
        <br />
        <br />
        <Form
          onSubmit={(e) => {
            handlesubmit(e);
            showToast();
          }}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Your email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email_id"
              name="email"
              autoComplete="on"
              // required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your FullName"
              value={name}
              id="user_name"
              onChange={(e) => setName(e.target.value)}
              name="name"
              autoComplete="on"

              // required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              <h5>PLEASE SELECT A FILE</h5>
            </Form.Label>
            <Form.Control
              type="file"
              placeholder="choose file"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>

        <br />
        <br />
        <div className="container"></div>
      </div>
    </>
  );
};
