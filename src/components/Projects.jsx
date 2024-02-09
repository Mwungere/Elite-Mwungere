import React from 'react'

const Projects = () => {
    const projects = [
        {
            image:'./studybud.png',
            h1:'StudyBud',
            p: "StudyBud is an application that provides room for people to chat like a discord server, it is powered by Django",
            vercel:'',
            github:'https://github.com/Mwungere/grilli'
        },
        {
            image:'./carshowcase.png',
            h1:'CarHub',
            p: "Explore my web development skills with this Car Showcase site. Powered ",
            vercel:'https://carshow-case-kappa.vercel.app/',
            github:'https://github.com/Mwungere/car-hub'
        },
        {
            image:'./grilli.png',
            h1:'Grilli',
            p: "Explore my frontend skills with this restaurant website. While backend features are absent, it highlights my ",
            vercel:'https://grilli-tau.vercel.app/',
            github:'https://github.com/Mwungere/grilli'
        }
    ]
  return (
    <div name="Projects" className=" w-full bg-primary p-5 text-white pl-10  font-body">
      <div className=' flex flex-col lg:pl-40 w-full m-auto'>
        <h1 className='text-3xl text-secondary  mb-10'>Featured projects</h1>
        <p>I have worked on many projects over the course of being a Software Full-stack developer. Here are few of my live, real-world projects</p>
      </div>
      <div className=' w-full flex flex-wrap items-center mt-[5%] gap-5 justify-center'>
        {
          projects.map(({image, h1, p, vercel, github}) => (
            <div key={h1} className=' flex flex-col rounded-xl bg-[#31313F] w-[343px] h-[417px] p-5'>
              <img src={image} alt="image" className=' w-72 h-60 mb-5 rounded-xl'/>
              <h1 className=' text-secondary text-xl font-bold mb-3'>{h1}</h1>
              <p>{p}</p>
              <div className='mt-5 flex justify-around'>
                <button className=' bg-secondary px-5 py-2 rounded-xl'><a href={vercel}>View Live</a></button>
                <button><a href={github} className=' border-2 py-2 px-5 rounded-xl border-secondary'>Github Repo</a></button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects
