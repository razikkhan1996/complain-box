import React from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth'

const Logout = () => {
  const firebase = useFirebaseApp();

  const handleClick = () => {
    firebase.auth().signOut();
  }

  return (
    <>
      <button type="button" onClick={handleClick} style={{border:"none",background:"white",fontWeight:"bolder"}}>Log Out</button>
    </>
  )
};

export default Logout;