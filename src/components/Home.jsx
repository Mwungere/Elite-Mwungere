import { useState, useEffect } from "react";
import person from "../assets/Elite.jpg";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import intro from "../assets/intro.json";

const Home = () => {
  const [about, setAbout] = useState(false);

  useEffect(() => {
    setAbout(true); // Trigger animation on mount
  }, []);

  return (
    <div
      name="Home"
      className="bg-primary text-white w-full lg:pt-60 md:pt-10 font-body overflow-hidden"
    >
      <div className="w-full pt-40 lg:pt-10 flex flex-col lg:flex-row lg:justify-around font-body">
        <div
          className={`h-full ml-10 lg:ml-40 mb-10 lg:-mt-10 transition-transform transform ${
            about ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <p className="pt-10 text-xl md:text-3xl">Hello, I'm</p>
          <h1 className="my-4 text-3xl md:text-5xl lg:text-7xl">Elite Mwungere</h1>
          <p>Full-stack developer for web and mobile applications</p>
          <p className="leading-7">
            I transform concepts into code, delivering elegant solutions for{" "}
            <br /> the digital world
          </p>
          <div className="flex gap-[5%] lg:pb-28 mt-[5%]">
            <button
              className={`bg-secondary py-2 px-3 rounded-md transition-transform transform btn ${
                about ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <Link to="About" smooth duration={500}>
                About me
              </Link>
            </button>
            <button
              className={`border-2 py-2 px-3 rounded-md transition-transform transform btn ${
                about ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <Link to="Projects" smooth duration={500}>
                Projects
              </Link>
            </button>
          </div>
        </div>
        <div
          className={`bg-secondary mt-10 lg:mt-0 sm:mr-2 pic-border rounded-[9999px] w-[486px] h-[486px] self-end transition-transform transform ${
            about ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Lottie
          animationData={intro}
           />
        </div>
      </div>
            {/* className="sm:-mt-20 pl-2 rounded-full" */}
      <div className="w-full bg-navbar h-36 -mt-36 z-10 absolute"></div>
    </div>
  );
};

export default Home;
