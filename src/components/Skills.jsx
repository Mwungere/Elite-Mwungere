import React from 'react'
import Scroller from './Scroller'

const Skills = () => {
  const skills = [
    {
      image: './js.svg',
      p: 'Javascript'
    },
    {
      image: './ts.svg',
      p: 'Typescript'
    },
    {
      image: './mongo.svg',
      p: 'Mongo DB'
    },
    {
      image: './postgres.svg',
      p: 'Postgresql'
    },
    {
      image: './php.svg',
      p: 'Php'
    },
    {
      image: './nest.svg',
      p: 'Nest Js'
    },
    {
      image: './docker.svg',
      p: 'Docker'
    },
    {
      image: './react.svg',
      p: 'React Js'
    },
    {
      image: './c++.svg',
      p: 'C++'
    },
    {
      image: './rub.svg',
      p: 'Ruby'
    },
    {
      image: './jext.svg',
      p: 'Jest'
    },
    {
      image: './redux.svg',
      p: 'Redux'
    },
    {
      image: './native.svg',
      p: 'React Native'
    },
    {
      image: './git.svg',
      p: 'Git'
    },
    {
      image: './python.svg',
      p: 'Python'
    },
    
  ]
  return (
    <div name="Skills" className='w-full bg-primary p-5 text-white pl-10 font-body flex flex-col items-center'>
      <h1 className=' lg:ml-40 self-start text-secondary text-3xl font-bold my-[5%]'>Skills</h1>
      <div className=' lg:ml-40 grid grid-flow-row grid-cols-2 md:grid-cols-5 lg:grid-cols-5  gap-10 md:gap-20 lg:gap-32'>
        {
          skills.map(({image, p}) => (
            <div key={image} className=' mb-[5%]'>
              <img src={image} alt="image" className=' w-16' />
              <p className=' text-sm uppercase mt-[5%] text-secondary'>{p}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills
