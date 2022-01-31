import React from "react";
import { Container, Row, Col, img } from "react-bootstrap";

import "./Started.css";

export default function Started() {
  return (
    <>
      <div id="fh5co-started">
        <div className="container">
          <div className="row animate-box fadeInUp animated-fast">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>Lets Get Started</h2>
              <p>
                Dignissimos asperiores vitae velit veniam totam fuga molestias
                accusamus alias autem provident. Odit ab aliquam dolor eius.
              </p>
            </div>
          </div>
          <div className="row animate-box fadeInUp animated-fast">
            <div className="col-md-8 col-md-offset-2">
              <form className="form-inline">
                <div className="col-md-6 col-md-offset-3 col-sm-6">
                  <button type="submit" className="btn btn-default btn-block">
                    Get In Touch
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
