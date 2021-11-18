import React from "react";
import Logo from "./logo.png";

export const HomeData = () => {
  return (
    <>
      <center>
        <img
          src={Logo}
          alt="logo"
          width="150px"
          style={{ marginLeft: "-5rem" }}
        />
      </center>
      <br/>
      <div style={{padding:"30px",boxShadow:"5px 5px 200px #498205"}}>
      <h4 style={{color:"#515C6B"}}>
        National Fertilizers Limited – Miniratna (Cat-1) company (BSE:
        523630) (NSE: NFL) is an India state owned producer of chemical
        fertilizers, organic fertilizers and industrial chemicals. As of 2018,
        it was the second largest producer of fertilizers in India. NFL,
        incorporated in 1979 is India's largest Central Public Sector Enterprise
        (Government of India Undertaking) in Fertilizer Sector with a turnover
        of over Rs. 75 billion. Coming under the administrative control of
        Ministry of Chemicals and Fertilizers, it is the second largest producer
        of the key fertiliser urea in India. NFL has five gas-based ammonia-urea
        plants viz Nangal and Bathinda in Punjab, Panipat in Haryana and two at
        Vijaipur (Madhya Pradesh).
      </h4>
      </div>
    </>
  );
};
