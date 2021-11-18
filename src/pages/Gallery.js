import React from "react";
import { Carousel } from "react-bootstrap";
import images from "./Images";
export const Gallery = () => {
  return (
    <>
      <h1>images</h1>
      <br />
      <br />

      <Carousel style={{boxShadow:"5px 5px 200px #498205"}}>
        {images.map((val) => {
          return (
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                height="400rem"
                src={val.imgsrc}
                alt="First slide"
              />
            </Carousel.Item>
          );
        })}
        ;
      </Carousel>
    </>
  );
};
