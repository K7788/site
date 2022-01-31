import React from "react";
import { Container, Text } from "react-bootstrap";

import "./OurProject.css";

export default function OurProject() {
  return (
    <>
      <div className="fh5co-project">
        <div className="container">
          <div className="row animate-box fadeInUp animated-fast">
            <div className="col-md-8 col-md-offset-2 fh5co-heading">
              <span>Want Some Cool Stuff</span>
              <h2>Our Project</h2>
              <p>
                Dignissimos asperiores vitae velit veniam totam fuga molestias
                accusamus alias autem provident. Odit ab aliquam dolor eius.
              </p>
            </div>
          </div>
        </div>

        <div className="project-content">
          <div className="col-half">
            <div className="project animate-box fadeInUp animated-fast picture">
              <div className="desc">
                <span>Application</span>
                <h3>Project Name</h3>
              </div>
            </div>
          </div>
          <div className="col-half">
            <div className="project-grid animate-box fadeInUp animated-fast picture_1">
              <div className="desc">
                <span>Illustration</span>
                <h3>Project Name</h3>
              </div>
            </div>
            <div className="project-grid animate-box fadeInUp animated-fast picture_2 ">
              <div className="desc">
                <span>Branding</span>
                <h3>Project Name</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
