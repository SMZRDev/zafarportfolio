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
        <div className="about_imgs">Images</div>
        <div className="about_text">
          <h1>About Me</h1>
          <h2>Hello there! I'm Zafar Rizvi.</h2>
          <p>
            A Self-taught developer who has developed solutions, MVPs, products
            and systems for more than 4 years. i have worked in various niches
            such as Safety apps, Travel apps like Aitlines, Busses and Hotels
            booking. In Addition to E-Commerce, lifestyle and story telling
            apps. I enjoy learning new tech so i'm always exploring stuff.
            That's the reason I've worked with almost every field out there
            starting with Cyber Security, Game, Web and Mobile Development,
            along with Machine Learing and so on. I've open sourced numerous
            projects on my GitHub and I've been writing articles on Medium for
            last 3 years now. In addition, i've been Google DSC lead and
            Microsoft Student Ambassador. Apart from tech, i love doing UI/UX
            design, playing video games and editing videos.
          </p>
          <button className="btn">Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default About;
