import Image from "next/image";
import React from "react";
import { Twitter, Linkedin, Medium, Envelope } from "./icons/";

const Sidebar = ({ data }) => {
  return (
    <div className="bg-black flex flex-col h-auto content-between w-full sm:justify-around sm:h-screen sm:w-1/3 sm:fixed">
      <div className="text-white flex flex-col p-10 items-center ">
        <Image
          priority
          width={300}
          height={300}
          className="rounded-full h-full mb-6"
          src={"/images/farhad-ali.png"}
          alt="farhad-ali.png"
          aria-label="farhad-ali.png"
        />
        <h1 className="mb-2">{data.name}</h1>
        <h2 className="mb-8">{data.role}</h2>
        <p className="mb-2">{data.education[0]}</p>
        <p className="mb-2">{data.education[1]}</p>
        <div className="text-white text-center  mb-4 mt-4 sm:mt-8">
          <h3 className="mb-2">CONTACT ME:</h3>
          <div className="flex flex-row justify-center gap-1">
            <a
              className="icon-contactme"
              href={data.contactLinks?.[0]}
              aria-label="twitter link"
            >
              <Twitter />
            </a>
            <a
              className="icon-contactme"
              href={data.contactLinks?.[1]}
              aria-label="email link"
            >
              <Envelope />
            </a>
            <a
              className="icon-contactme"
              href={data.contactLinks?.[2]}
              aria-label="linkedIn link"
            >
              <Linkedin />
            </a>
            <a
              className="icon-contactme"
              href={data.contactLinks?.[3]}
              aria-label="medium link"
            >
              <Medium />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
