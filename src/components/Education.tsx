import React from 'react'

const Education = () => {
  return (
    <div id='education' className='container pt-32'>
        

        <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
          <h2 className='text-4xl md:text-5xl' data-aos="zoom-in-up">My Qualifications</h2>
        </div>
       </div>

       <div className='grid grid-cols-2 text-accent text-1xl sm:text-2xl color-gray-500'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Graduations From Karachi University</h2>
              <h2 data-aos="zoom-in-up">Inter From Sir Syed Collage</h2>
              <h2 data-aos="zoom-in-up">Matic From N.E.D Foundation School</h2>
            </div>
            
             </div>

    </div>
  )
}

export default Education
