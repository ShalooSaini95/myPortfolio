import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import {Container, Row ,Col } from 'react-bootstrap'
import image from "../portfolio_images1/whatsapp_image.jpeg";




const Home = () => {
  return (
    <div className="outer-div d-flex " style={{height:"100vh", overflow:"hidden"}}>
    <Container className="h-100 " fluid>
    <Row className="h-100 align-items-center">

 <Col className=""> 
      <div >
      <h2 className="text-primary my-5 ">SHALOO SAINI</h2>
        <p className="text-dark " style={{color:"#666", letterSpacing:".5px", lineHeight:"1.8"}} >
          "Enthusiastic and detail-oriented fresher developer with a strong
          foundation in web development and a passion for learning new
          technologies."
          "Committed to writing clean, efficient code and delivering user-friendly web applications with a focus on a functionality and desgign."
        </p>
        
      </div></Col>
      <Col md={6} sm={12} className="d-flex justify-content-center align-items-center">
      <div>
        <img
          src={image}
          alt="img" fluid className="col-lg-12  my-5" style={{borderRadius:"40px",width:"100vw", height:"90vh",  objectFit:"contain"}}
        />
      </div>
      </Col>
      </Row>

      </Container>
    </div>
  );
};

export default Home;
