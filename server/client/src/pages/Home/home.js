import React from "react";
import UpperSlide from "./upperSlide";
import MiddleSlide from "./middleSlide";
import Services from "./services";
import DownSlide from "./downSlide";
import Contact from "./contact";

const Home = () => {
  return (
    <React.Fragment>
      <UpperSlide />
      <Services />
      <MiddleSlide />
      <DownSlide />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
