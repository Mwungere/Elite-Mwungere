import React from "react";
import { clientTestimonials } from "./constants";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Testimonials = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    if (slider){
      slider.scrollLeft=slider.scrollLeft - 500;
    }
  }

  const slideRight = () => {
    var slider=document.getElementById("slider");
    if(slider){
      slider.scrollLeft = slider.scrollLeft + 500;
    }
  };
  return (
    <div className=" bg-primary w-full h-full">
      <h1 className=" lg:ml-40 self-start text-secondary text-3xl font-bold my-[5%]">Testimonials</h1>
      <div className=" w-[80%] flex mx-auto justify-center h-full ">
        <FaChevronCircleLeft className=" text-green-50 hover:cursor-pointer" onClick={slideLeft} />
        <div id="slider" className=" h-full w-[70%] flex overflow-x-scroll scrollbar-none">
          {clientTestimonials.map((testimonial) => (
            <div key={testimonial.index} className="">
              <div className=" flex justify-between">
                <img src={testimonial.img}  alt="image"  className=" w-8 rounded-full h-8" />
                <div>
                  <h3 className="font-body text-secondary">
                    {testimonial.name}
                  </h3>
                  <p className="text-secondary">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <FaChevronCircleRight onClick={ slideRight} className=" text-green-50 hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default Testimonials;
