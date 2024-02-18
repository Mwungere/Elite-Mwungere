import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { clientTestimonials } from "./constants";

const Scroller = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 500;
    }
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 500;
    }
  };
  return (
    <div className="w-full h-fit">
      <div className=" h-full relative w-full flex items-center">
        <MdChevronLeft
          onClick={slideLeft}
          className=" opacity-50 hover:opacity-100 cursor-pointer"
          size={40}
        />
        <div
          id="slider"
          className=" mx-auto item-center flex w-full h-full overflow-x-scroll scroll scroll-smooth scrollbar-none"
        >
          {clientTestimonials.map((client) => (
            <div key={client.index} className="border w-fit  flex flex-col">
              <div className=" flex items-center">
                <img src={client.img} alt="image" className=" rounded-full w-20" />
                <div>
                  <h1>{client.name}</h1>
                  <p>{client.role}</p>
                </div>
              </div>
              <p className="overflow-auto">{client.testimonial}</p>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className=" opacity-50 hover:opacity-100 cursor-pointer"
          size={40}
        />
      </div>
    </div>
  );
};

export default Scroller;
