import React from "react";
import { Container, Row, Col, img } from "react-bootstrap";

import "./HappyClient.css";

export default function HappyClient() {
  return (
    <>
      <div id="fh5co-testimonial" className="fh5co-bg-section">
        <div className="container">
          <div className="row animate-box fadeInUp animated-fast">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>Happy Clients</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="row">
                <div className="col-md-12 animate-box fadeInUp animated-fast">
                  <div className="testimony">
                    <div className="inner text-center">
                      <div className="person_3" alt="testimony"></div>
                    </div>
                    <blockquote>
                      <p>
                        “Facilis ipsum reprehenderit nemo molestias. Aut cum
                        mollitia reprehenderit. Eos cumque dicta adipisci
                        architecto culpa amet.”
                      </p>
                      <p className="author">
                        <cite>— John Doe</cite>
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
