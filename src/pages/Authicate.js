import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { firebaseauth } from "../firebase";

export const Authicate = (props) => {
  const [loggedIn, setloggedIn] = useState(null);
  firebaseauth.onAuthStateChanged((user) => {
    if (user) {
      setloggedIn(true);
    } else {
      setloggedIn(false);
    }
  });

  if (props.nonAuthenticated) {
    if (loggedIn == null) {
      return "loding...";
    } else if (!loggedIn) {
      return props.children;
    } else if (loggedIn) {
      return <Redirect to="/" />;
    }
  } else {
    if (loggedIn == null) {
      return "loding...";
    } else if (loggedIn) {
      return props.children;
    } else if (!loggedIn) {
      return <Redirect to="/login" />;
    }
  }
};
