import React from 'react'

import Logo1 from "../asset/Asset/TimeLineLogo/Logo1.svg";
import Logo2 from "../asset/Asset/TimeLineLogo/Logo2.svg";
import Logo3 from "../asset/Asset/TimeLineLogo/Logo3.svg";
import Logo4 from "../asset/Asset/TimeLineLogo/Logo4.svg";
import image from "../asset/Asset/Image/i1.jpg"

const timeline = [
      {
        Logo: Logo1,
        heading: "leadership",
        Description: "Fully committed to the success company",
      },
      {
        Logo: Logo2,
        heading: "leadership",
        Description: "Fully committed to the success company",
      },
      {
        Logo: Logo3,
        heading: "leadership",
        Description: "Fully committed to the success company",
      },
      {
        Logo: Logo4,
        heading: "leadership",
        Description: "Fully committed to the success company",
      },
];

const TimelineSection = () => {
  return (
    <div className='mx-auto w-11/12 max-w-maxContent flex items-center justify-center my-20'>
           {/* //left box */}
           <div className='w-4/9 flex flex-col gap-3'>
               {
                 timeline.map((element , index) => {
                    return(

                        <div className='flex flex-row gap-6 w-3/4' key={index}>
                            
                            <div>
                                 <img src={element.Logo} />
                                 <div className='m-1.5 '>
                                       <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-sky-200 to-blue-400 my-1"></div>
                                       <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-sky-200 to-blue-400 my-1"></div>
                                       <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-sky-200 to-blue-400 my-1"></div>
                                 </div>
                            </div>
                            <div>
                                <h2 className='font-semibold text-2xl'>{element.Heading}</h2>
                                <p className='text-base'>{element.Description}</p>
                            </div>
                         

                        </div>
                    )
                 })
               }
           </div>
           {/* //right box */}
           <div className='relative shadow-blue-200 shadow-2xl w-1/2 '>

               <img src={image} className='h-[400px] bg-auto translate-x-[3%] translate-y-[5%]'></img>

               <div className='absolute text-white  bg-caribbeangreen-700 flex flex-row uppercase py-10 w-3/5 left-[17%]
                                translate-y-[-40%] '>
                    <div className='flex flex-row gap-5  items-center border-r-caribbeangreen-300 px-7'>
                        <p className='text-3xl font-bold'>10</p>
                        <p className='text-caribbeangreen-300 text-sm'>Years of Experience</p>
                    </div>
                     <div className='flex flex-row gap-5 items-center border-r-caribbeangreen-300 px-7'>
                        <p className='text-3xl font-bold'>250</p>
                        <p className='text-caribbeangreen-300 text-sm'>Types of Courses</p>
                    </div>
               </div>

           </div>


    </div>
  )
}

export default TimelineSection
