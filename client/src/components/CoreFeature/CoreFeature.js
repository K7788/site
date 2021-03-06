import React from "react";
import { Container, Row, Col, img } from "react-bootstrap";

import "./CoreFeature.css";

export default function CoreFeature() {
  return (
    <Container fluid className="container">
      <Row className="row">
        <Col className="features_one">
          <div
            className="col-half animate-box fadeInLeft animated-fast"
            data-animate-effect="fadeInLeft"
          >
            <div className="table-c">
              <div className="desc">
                <span>Try Our Awesome Stuff</span>
                <h3>Anyone can make there own Website</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics.
                </p>
                <p>
                  <a href="#" className="btn btn-lg btn-primary">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col className="feature_two">
          <div
            className="col-half-image-holder animate-box fadeInRight animated-fast"
            data-animate-effect="fadeInRight"
          >
            <div
              className="img-responsive"
              src="images/samsungs6.png"
              alt="samsung"
            ></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
