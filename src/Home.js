import React from "react";
import Navbar from "./navbar";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWorks />
      <Aboutus />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
