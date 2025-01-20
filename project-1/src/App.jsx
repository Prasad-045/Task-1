import React from "react";
import "./App.css"
import HeaderSection from "./header/HeaderSection";
import Main from "./main/Main";
import Footer from "./footer/Footer";

const App = () => {
  return (
    <div>
      <HeaderSection />
      <Main/>
      <Footer/>
    </div>
  );
};

export default App;
