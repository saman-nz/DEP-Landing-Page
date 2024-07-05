import React from "react";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <>
      <div
        className={`container ${styles.hero} d-flex align-items-center justif-content-center`}
      >
        <div className="row">
          <div className="col-md-6 d-flex flex-column gap-2">
            <h1 className="fw-bold">Empowering Students of Pakistan</h1>
            <p>
              Digital Empowerment Network is commited to work by designing
              indigenious interventions and working in collaberation with
              different public and private institutions for students’ greater
              development.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="cyan">
                Apply Now
              </a>
              <a href="#" className="lightBlue">
                Learn more
              </a>
            </div>
            <div className="d-flex align-items-center pt-4 gap-3">
              <img src="./Frame 13.png" alt="" />
              <h6 className="mb-0"> 5K + Enrolment</h6>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img src="./hero section images.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
