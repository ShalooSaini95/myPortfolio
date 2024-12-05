import React from "react";
import image from '../portfolio_images1/1st_image.jpeg'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container, Row ,Col,Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <div className="outer-div d-flex">
    <Container>
    <Row>
<Col>
      <div>
        <h2 className="mt-5 text-primary">SHALOO SAINI</h2>
        <p style={{color:"#666", letterSpacing:".5px", lineHeight:"1.8"}} className="mt-5">
          "Enthusiastic and detail-oriented fresher developer with a strong
          foundation in web development and a passopm for learning new
          technologies."
        </p>
        <button className="btn btn-primary btn-hover"><Nav.Link to="/projects" as={Link}>Projects</Nav.Link></button>
      </div></Col>
      <Col>
      <div>
        <img
          src={image}
          alt="img" className="col-lg-12  my-5" style={{borderRadius:"20px"}}
        />
      </div>
      </Col>
      </Row>

      </Container>
    </div>
  );
};

export default Home;
