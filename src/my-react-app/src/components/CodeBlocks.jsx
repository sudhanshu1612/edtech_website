import React from 'react'
import CTAButton from '../components/Button';
import HighlightText from '../components/HighlightText'
import {FaArrowRight} from "react-icons/fa"

const CodeBlocks = ({position, heading , subheading , ctabtn1 , ctabtn2, codeblock , backgroundGradient }) => {  
  return (
    <div className={`flex ${position} my-20 justify-between gap-10`}>
          {/* section1 */}
          <div className='w-[50%] flex flex-col gap-8'>
              {heading}
              <div className='text-richblack-300 font-bold'>
                {subheading}
              </div>
              <div className="flex gap-7 m-7">
                 <CTAButton active={ctabtn1.active} Linto={ctabtn1.linkto}>
                   <div className='flex gap-2 items-center'>
                      {ctabtn1.btnText}
                      <FaArrowRight></FaArrowRight>
                   </div>
                 </CTAButton>
                 <CTAButton active={ctabtn2.active} Linkto={ctabtn2.linkto}>
                      {ctabtn2.btnText}
                 </CTAButton>
                 
              </div>
          </div>
    </div>
  )
}

export default CodeBlocks
