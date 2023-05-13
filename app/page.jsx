import React from "react";
import AboutMe from "./components/AboutMe";
import { aboutMe, skills, professionalData } from "../data/page-data";

import Skills from "./components/Skills";
import ProExp from "./components/ProExp";

const page = () => {
  return (
    <div className="">
      <AboutMe data={aboutMe} skills={skills} />
      <ProExp data={professionalData} />
    </div>
  );
};

export default page;
