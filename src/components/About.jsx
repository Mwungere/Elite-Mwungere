import React, { useState, useEffect, useRef } from "react";
import { useSpring, useSprings, animated, config } from "react-spring";
import developer from "../assets/developer.json";
import Lottie from "lottie-react";
import { FaPalette, FaGlobe, FaAndroid } from "react-icons/fa";
import { DiPython } from "react-icons/di";
import { clientTestimonials } from "./constants";

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

  const testimonialsRef = useRef({});

  const testimonialSprings = useSprings(
    clientTestimonials.length,
    clientTestimonials.map((_, index) => ({
      transform: `translateX(${100 * (index - testimonialIndex)}%)`,
      config: config.slow,
    }))
  );

  const handleNextTestimonial = () => {
    setTestimonialIndex((prevIndex) =>
      prevIndex < clientTestimonials.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : clientTestimonials.length - 1
    );
  };

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
      <div ref={aboutRef} className="pt-16 ml-10 lg:ml-40 mr-10 lg:mr-24">
        <animated.h1
          style={contentAnimation}
          className="text-3xl text-secondary mb-5"
        >
          About me:
        </animated.h1>
        <animated.p style={contentAnimation} className="leading-7">
          Hi, my name is Elite Mwungere. As a full-stack developer, I'm
          passionate about all aspects of the digital realm. My skills span the
          entire spectrum, from creating eye-catching designs to building
          seamless web and mobile applications. I also have a knack for web
          scraping, extracting valuable insights from data on the web. My
          journey is defined by the pursuit of innovation and the commitment to
          deliver elegant solutions for the ever-evolving digital landscape.
        </animated.p>
      </div>
      <div className="flex justify-around flex-col lg:flex-row p-20">
        <animated.div style={lottieAnimation}>
          <Lottie
            animationData={developer}
            className="w-[320px] h-[320px] md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[800px] lg:ml-40"
          />
        </animated.div>
        <div className=" flex flex-col">
          <animated.div style={ExperienceAnimation} className="flex lg:my-10">
            <p className="mr-2 text-7xl text-secondary">{about ? "5+" : "0"}</p>
            <p className="my-4 ">
              <span>Years of experience. </span>
              <span>Specialized in building apps, </span>
              <span>ensuring a seamless experience for end users.</span>
            </p>
          </animated.div>
          <div className="flex overflow-hidden relative">
            {testimonialSprings.map((style, index) => (
              <animated.div key={index} style={{ ...style, width: "100%" }}>
                <div className="w-full rounded-lg h-fit shadow-4xl bg-blue-800 m-4 p-4">
                  <img
                    src={clientTestimonials[index].img}
                    alt="pic"
                    width={44}
                    height={44}
                    className="rounded-full mb-4"
                  />
                  <h1 className="font-bold text-lg mb-3">
                    Hirer: {clientTestimonials[index].name}
                  </h1>
                  <h2 className="font-semibold mb-7">
                    Position: {clientTestimonials[index].role}
                  </h2>
                  <p>{clientTestimonials[index].testimonial}</p>
                </div>
              </animated.div>
            ))}
          </div>
          <div className="flex mt-4">
            <button onClick={handlePrevTestimonial}>Previous</button>
            <button onClick={handleNextTestimonial}>Next</button>
          </div>
        </div>
      </div>
      <animated.div
        style={ExperienceAnimation}
        className="flex justify-center flex-wrap"
      >
        {AboutList.map(({ id, src, p1, p2 }) => (
          <div
            key={id}
            className="cursor-pointer mx-6 w-[30%] mb-7 md:w-[20%] lg:w-60 lg:mx-14 h-60 bg-gray-400 shadow-md shadow-white p-3 rounded-lg custom-hover-bg"
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
    </animated.div>
  );
};

export default About;
