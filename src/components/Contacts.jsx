import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Contacts = () => {
  return (
    <div name="Contacts" className="w-full bg-primary text-white p-10 lg:p-40 font-body flex flex-col items-center md:flex-row">
      <div className=" self-start flex flex-col w-1/2">
        <h1 className=" text-3xl font-bold text-secondary mb-[3%]">Connect with me:</h1>
        <p className=" mb-[3%]">Satisfied with me? Please contact me</p>
        <div className=" flex gap-[5%]">
          <FaFacebook className=" text-4xl text-secondary" />
          <FaInstagram className=" text-4xl text-secondary" />
          <FaTwitter className=" text-4xl text-secondary" />
          <FaLinkedin className=" text-4xl text-secondary" />
          <FaGithub className=" text-4xl text-secondary" />
        </div>
      </div>
      <div className=" w-1/2">
        <form
          action="https://getform.io/f/bee2eb3a-9f19-4e1b-a496-81fd7df5128f"
          method="POST"
          className=" flex flex-col"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className=" p-2 bg-[#31313F] rounded-md text-white focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
            className=" my-4 p-2 bg-[#31313F] rounded-md text-white focus:outline-none"
          />
          <textarea
            name="message"
            rows="10"
            placeholder="Enter your message"
            required
            className=" p-2 bg-[#31313F] rounded-md text-white focus:list-none"
          ></textarea>
          <button className=" text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
            Let's connect
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
