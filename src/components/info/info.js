import React from "react";
import Header from "./../header/header";
import "./info.css";
import infoImage from "./../../imgs/info.png";

const info = () => {
  return (
    <>
      <div className="main_info_div">
        <Header />
        <div className="info_div">
          <div className="info_left_div">
            <div className="brown_line line"></div>
            <h1>
              I'm <span>Zafar Rizvi</span>, a <br />
              Front-end Developer
            </h1>
            <p>I design web apps to turn your ideas into reality.</p>
            <button>Get in Touch</button>
            <div className="white_line line"></div>
            <div className="social_icons">
              <p>Let's connect! --</p>
              <i class="fab fa-linkedin-in"></i>
              <i class="fab fa-github"></i>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
            </div>
          </div>
          <div className="info_right_div">
            <img src={infoImage} alt="Zafar Rizvi" />
          </div>
        </div>
      </div>
    </>
  );
};

export default info;
