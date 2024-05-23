import React from 'react';
import "./education.css";

const Education = () => {
  return (
    <section id="education">
      <h2 className="educationTitle">Education</h2>
      <div className="educationContent">
        <div className="educationBox">
          <h3>Secondary School</h3>
          <p>School Name: Gouthami E-techno School</p>
          <p>Year: 2014</p>
        </div>
        <div className="educationBox">
          <h3>Higher Secondary Certificate</h3>
          <p>School Name: Sri Chaitanya Junior College</p>
          <p>Year: 2016</p>
        </div>
        <div className="educationBox">
          <h3>Bachelor's Degree in Electronis and Communication Engineering</h3>
          <p>Institution: Bapatle Engineering College</p>
          <p>Year: 2020</p>
        </div>
        <div className="educationBox">
          <h3>Master's Degree</h3>
          <p>Institution: Auburn University at Montgomery</p>
          <p>Year: 2024</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
