import React from 'react'

const Skills = () => {
  return (
    <div id='Skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
          <h2 className='text-4xl md:text-5xl'>Teachnologies I Work With</h2>
          <p className='text-gray-500 pt-2'>
        I have a solid foundation in web development,Specailizing in Html Css Typescript and Javascript,My experience extends to using frameworks like React and Next.js to create dynamic and user friendly applications,I stay updated on the latest teachnologies to enhance my Skill set and contribute effectively to project
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
            </div>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Html</h2>
              <h2 data-aos="zoom-in-up">Css</h2>
              <h2 data-aos="zoom-in-up">Node.js</h2>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Skills
 