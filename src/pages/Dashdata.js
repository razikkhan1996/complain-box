import React from "react";
import Cards from "./Cards";

const Dashdata = () => {
  const handlecards=()=>
  {
    alert("working");
    
  }
  return (
    <>
      <h1>Dashboard</h1>
      <br />
      <br />
      <div style={{display:"flex",justifyContent:"space-around"}}>
      <Cards text={"Complaint"} func={handlecards}/>
      <br />
      <Cards text={"Report"} func={handlecards} />
      </div>
    </>
  );
};

export default Dashdata;
