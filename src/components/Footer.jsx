import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-primary text-white p-10 lg:px-40 font-body flex flex-col items-center">
      <div className=" w-full flex flex-row justify-between text-secondary">
        <p>@Mwungere Elite</p>
        <p>Fullstack Developer</p>
        <p>UI Designer</p>
        <p>mwungereelite56@gmail.com</p>
      </div>
      <div className=" flex self-start mt-[5%] gap-5">
        <FaFacebook className=" text-4xl text-secondary" />
        <FaInstagram className=" text-4xl text-secondary" />
        <FaTwitter className=" text-4xl text-secondary" />
        <FaLinkedin className=" text-4xl text-secondary" />
        <FaGithub className=" text-4xl text-secondary" />
      </div>
    </div>
  );
};

export default Footer;
