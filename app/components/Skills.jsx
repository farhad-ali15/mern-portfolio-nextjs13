"use client";

import React, { useState } from "react";
import { useId } from "react";

const Skills = ({ data }) => {
  const [activeTab, setActiveTab] = useState("Soft");
  const id = useId();

  const setBg = (active) => (activeTab === active ? "bg-yellow" : "bg-grey");
  const setTextAllignment = (tab) =>
    tab === "Soft" ? "text-left" : "text-right";
  const tabs = (
    <div className="flex  flex-row">
      {["Soft", "Hard"].map((v, i) => (
        <button
          type="button"
          className={`btn ${setBg(v)} ${setTextAllignment(v)}`}
          onClick={(e) => setActiveTab(v)}
          key={`${id}_${i}`}
        >
          {v} Skills
        </button>
      ))}
    </div>
  );
  const content = (
    <ul
      className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${
        activeTab === "Soft" ? "justify-start" : "justify-end"
      }`}
    >
      {data[activeTab].map(({ icon, text }, i) => (
        <li key={`${id}_${i}`} className="skills">
          <span>{icon}</span>
          {text}
        </li>
      ))}
    </ul>
  );
  return (
    <div>
      {tabs}
      {content}
    </div>
  );
};

export default Skills;
