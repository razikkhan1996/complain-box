import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import { firebaseauth, firestore } from "../firebase";
import Logo from './logo.png';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      show_progress: false,
    };

    this.handlechange = this.handlechange.bind();
    this.login = this.login.bind();
  }

  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = () => {
    let valid_data = true;
    this.state.email_error = null;
    this.state.password_error = null;

    if (this.state.email === "") {
      this.state.email_error = "required!!";
      valid_data = false;
    }

    if (this.state.password === "") {
      this.state.password_error = "required!!";
      valid_data = false;
    }

    if (valid_data) {
      this.state.show_progress = true;
    }

    this.setState({
      update: true,
    });

    if (valid_data) {
      //login
      firestore
        .collection("users")
        .where("email", "==", this.state.email)
        .where("isAdmin", "==", true)
        .get()
        .then((querySnapshot) => {
          if (!querySnapshot.empty) {
            //login
            firebaseauth
              .signInWithEmailAndPassword(this.state.email, this.state.password)
              .then((res) => {
                this.props.history.replace("/");
              })
              .catch((err) => {
                console.log(err.code);
                if (err.code === "auth/wrong-password") {
                  this.state.password_error = "Incorrect Password!!";
                }
                this.setState({
                  show_progress: false,
                });
              });
          } else {
            this.state.email_error = "Not Allowed!!";
            this.setState({
              show_progress: false,
            });
          }
        });
    } else {
    }
  };

  render() {
    return (
      <Container maxWidth="sm" >
        <Box style={{boxShadow:"10px 10px 200px #00c300"}}
          bgcolor="white"
          textAlign="center"
          borderRadius="12"
          p="24px"
          mt="50px"
          boxShadow="2"
        >
          <Typography varient="h5" color="textSecondary">
            <img src={Logo} alt="logo" width="100px"/>
          </Typography>

          <TextField
            label="Employee ID"
            margin="normal"
            id="outlined-size-small"
            variant="outlined"
            fullWidth
            name="email"
            error={this.state.email_error != null}
            helperText={this.state.email_error}
            onChange={this.handlechange}
            size="small"
            color="secondary"
          />

          <TextField
            label="Password"
            margin="normal"
            id="outlined-size-small"
            name="password"
            error={this.state.password_error != null}
            helperText={this.state.password_error}
            onChange={this.handlechange}
            type="password"
            color="secondary"
            variant="outlined"
            fullWidth
            size="small"
          />
          <br />
          <br />
          {this.state.show_progress ? (
            <CircularProgress size={24} thickness={4} color="primary" />
          ) : null}
          <br />
          <br />
          <Button
            disableElevation
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.login}
          >
            Login
          </Button>
        </Box>
      </Container>
    );
  }
}

export default Login;
