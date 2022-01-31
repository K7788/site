import React from "react";
import { Container, Text } from "react-bootstrap";

import "./Services.css";

export default function Services() {
  return (
    <>
      <div id="fh5co-services" className="fh5co-bg-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4 text-center">
              <div
                className="feature-center animate-box fadeIn animated-fast"
                data-animate-effect="fadeIn"
              >
                <span className="icon">
                  <i className="icon-eye"></i>
                </span>
                <h3>Retina Ready</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 text-center">
              <div
                className="feature-center animate-box fadeIn animated-fast"
                data-animate-effect="fadeIn"
              >
                <span className="icon">
                  <i className="icon-command"></i>
                </span>
                <h3>Fully Responsive</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 text-center">
              <div
                className="feature-center animate-box fadeIn animated-fast"
                data-animate-effect="fadeIn"
              >
                <span className="icon">
                  <i className="icon-power"></i>
                </span>
                <h3>Web Starter</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
