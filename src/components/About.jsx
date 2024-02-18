import React, { useState, useEffect, useRef } from "react";
import { useSpring, useSprings, animated, config } from "react-spring";
import developer from "../assets/developer.json";
import Lottie from "lottie-react";
import { FaPalette, FaGlobe, FaAndroid } from "react-icons/fa";
import { DiPython } from "react-icons/di";
import { clientTestimonials } from "./constants";
import Scroller from "./Scroller";

const About = () => {
  const [about, setAbout] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const backgroundAnimation = useSpring({
    backgroundColor: about ? "#1A1A29" : "#1F2937",
    config: { duration: 800 },
  });

  const contentAnimation = useSpring({
    opacity: about ? 1 : 0,
    transform: about ? "translateY(0)" : "translateY(50px)",
    config: { duration: 800 },
  });

  const lottieAnimation = useSpring({
    opacity: about ? 1 : 0,
    transform: about ? "translateX(0)" : "translateX(-150px)",
    config: { duration: 1500 },
  });

  const ExperienceAnimation = useSpring({
    opacity: about ? 1 : 0,
    transform: about ? "translateY(0)" : "translateY(150px)",
    config: { duration: 2500 },
  });

  const aboutRef = useRef(null);

  useEffect(() => {
    const isElementInView = () => {
      const rect = aboutRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    const handleScroll = () => {
      if (isElementInView()) {
        setAbout(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const AboutList = [
    {
      id: 1,
      src: <FaPalette />,
      p1: "UI & UX",
      p2: "DESIGN",
    },
    {
      id: 2,
      src: <FaGlobe />,
      p1: "WEB",
      p2: "DEVELOPMENT",
    },
    {
      id: 3,
      src: <FaAndroid />,
      p1: "MOBILE",
      p2: "DEVELOPMENT",
    },
    {
      id: 4,
      src: <DiPython />,
      p1: "WEB SCRAPING",
      p2: "WITH PYTHON",
    },
  ];

  return (
    <animated.div
      name="About"
      style={backgroundAnimation}
      className="w-full text-white font-body"
    >
      <div ref={aboutRef} className="pt-16 ml-5 lg:ml-40 mr-10 lg:mr-24">
        <animated.h1
          style={contentAnimation}
          className="text-3xl text-secondary mb-5"
        >
          About me:
        </animated.h1>
        <animated.p style={contentAnimation} className="leading-7">
          Elite Mwungere, a full-stack developer, is passionate about the
          digital realm. He excels in creating eye-catching designs, <br />
          building seamless web and mobile applications, and has expertise in
          web scraping for valuable data insights. Committed <br />
          to innovation, he delivers elegant solutions for the dynamic digital
          landscape.
        </animated.p>
      </div>
      <div className="flex justify-around flex-col lg:flex-row p-20">
        <animated.div className=" lg:w-1/2" style={lottieAnimation}>
          <Lottie
            animationData={developer}
            className=" hidden md:block md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[800px] lg:ml-40"
          />
        </animated.div>
        <div className="hidden  lg:w-1/2  md:flex flex-col">
          <animated.div style={ExperienceAnimation} className="flex lg:my-10">
            <p className="mr-2 text-7xl text-secondary">{about ? "3+" : "0"}</p>
            <p className="my-4 ">
              <span>Years of experience. </span>
              <span>Specialized in developing apps, </span>
              <span>ensuring a seamless experience for end users.</span>
            </p>
          </animated.div>

          <div className="">
            <animated.div
              style={ExperienceAnimation}
              className="flex justify-center flex-wrap"
            >
              {AboutList.map(({ id, src, p1, p2 }) => (
                <div
                  key={id}
                  className="cursor-pointer mx-6 w-[30%] md:w-[20%] lg:w-64 lg:mx-5 h-60 bg-gray-400 shadow-md shadow-white p-3 rounded-lg custom-hover-bg hidden lg:block mb-6"
                >
                  <animated.p
                    style={contentAnimation}
                    className="text-4xl mt-7 mb-20"
                  >
                    {src}
                  </animated.p>
                  <animated.p style={contentAnimation}>{p1}</animated.p>
                  <animated.p style={contentAnimation}>{p2}</animated.p>
                </div>
              ))}
            </animated.div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default About;
