import React from "react";
import Header from "./../header/header";
import "./info.css";
import infoImage from "./../../imgs/info.png";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const info = () => {
  return (
    <>
      <div className="main_info_div">
        <Header />
        <div className="info_div">
          <div className="info_left_div">
            <div className="brown_line line"></div>
            <h1>
              I'm <span className="name">Zafar Rizvi</span>
              <br />
            </h1>
            <h2>Front-end Developer</h2>
            <p>I design web apps to turn your ideas into reality.</p>
            <button>Get in Touch</button>
            <div className="white_line line"></div>
            <div className="social_icons">
              <p>Let's connect! --</p>
              <FaGithub className="icons" />
              <FaLinkedin className="icons" />
              <FaTwitter className="icons" />
              <FaInstagram className="icons" />
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
