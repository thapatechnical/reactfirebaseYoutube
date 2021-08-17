import React from "react";
import Navbar from "./navbar";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Contact from "./Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWorks />
      <Aboutus />
      <Services />
      <Contact />
    </>
  );
};

export default App;
