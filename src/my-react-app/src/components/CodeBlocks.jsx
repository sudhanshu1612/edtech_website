import React from 'react'
import CTAButton from '../components/Button';
import HighlightText from '../components/HighlightText'
import {FaArrowRight} from "react-icons/fa"

const CodeBlocks = ({position, heading , subheading , ctabtn1 , codeblock , backgroundGradient , codeColor}) => {  
  return (
    <div className='flex ${position} my-20 justify-between gap-10 '>
          {/* section1 */}
          <div className="w-[50%] flex flex-col gap-8">
               {heading}
               <div className='text-richblack-300 font-bold'>
                  {subheading}
               </div>

               <div className='flex gap-7 m-7'>
                  <CTAButton active={ctabtn1.active} linkto={ctabtn1.link}></CTAButton>
                  <CTAButton></CTAButton>
               </div>
          </div>
          <div className="">

          </div>
    </div>
  )
}

export default CodeBlocks