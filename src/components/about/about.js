import React from "react";
import { useState, useEffect } from "react";
import "./about.css";

const About = () => {
  const [visitCount, setVisitCount] = useState(
    localStorage.getItem("visitCount") || 1
  );
  useEffect(() => {
    localStorage.setItem("visitCount", Number(visitCount) + 1);
  });

  return (
    <div className="about_main">
      <div className="about_lower_main">
        <div className="about_imgs">{visitCount}</div>
        <div className="about_text">
          <h1>About Me</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
