import React from "react";
import Info from "./components/info/info";
import About from "./components/about/About";
import "./app.css";

const App = () => {
  return (
    <>
      <div className="main_app_div">
        <Info />
        <About />
      </div>
    </>
  );
};

export default App;
