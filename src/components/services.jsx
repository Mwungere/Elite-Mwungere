import { useSpring, animated, config } from 'react-spring';
import { useEffect, useRef, useState } from 'react';
import { useInView } from "react-intersection-observer";
import { ServiceList } from "./constants";

const Services = () => {

    const [services, setServices] = useState(false)
    const backgroundAnimation = useSpring({
        backgroundColor: services ? '#1A1A29' : '#1F2937',
        config: { duration: 800 },
      });


      const divAnimation = useSpring({
        opacity: services ? 1 : 0,
        transform: services ? 'translateY(0)' : 'translateY(50px)',
        config: {duration:500}
      })

      const [ref, inView] =  useInView({
        triggerOnce:true
      })
      useEffect(() => {
        if(inView){
            setServices(true)
        }
      },[inView])
      

  
    return (

        <animated.div style={backgroundAnimation} name="services" className=" w-full bg-primary p-5 text-white pl-10 font-body">
            <div>
                <h2 className=" text-3xl text-secondary lg:ml-40 mb-10">The services I offer: </h2>
                <div className=" flex flex-wrap justify-center ">
                    {
                        ServiceList.map(({ id, src, p1, p2, b_color, t_color }) => {
                            return (
                                <animated.div ref={ref} style={divAnimation} className={`border-solid rounded-xl border-2 w-96 lg:w-96 h-80 lg:h-96 p-10 text-center mr-10 lg:mr-20 mb-10    ${b_color}`} key={id}>
                                    <div className="flex flex-col justify-center items-center h-full">
                                        <p className="text-5xl mb-3">{src}</p>
                                        <h2 className={` ${t_color} text-2xl mb-5`}>{p1}</h2>
                                        <p className="white-space">{p2}</p>
                                    </div>
                                </animated.div>
                            )
                        })

                    }
                </div>
            </div>


        </animated.div>
    );
}

export default Services;