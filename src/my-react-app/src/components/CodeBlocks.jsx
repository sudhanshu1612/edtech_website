import React from 'react'
import CTAButton from '../components/Button';
import HighlightText from '../components/HighlightText'
import {FaArrowRight} from "react-icons/fa"
import { TypeAnimation } from 'react-type-animation';

const CodeBlocks = ({position, heading , subheading , ctabtn1 , ctabtn2, codeblock , backgroundGradient }) => {  
  return (
    <div className={`flex ${position} my-20 justify-between gap-10 px-20`}>
          {/* section1 */}
          <div className="w-1/2 flex flex-col gap-8">
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

          {/* {section2} */}
          <div className="w-1/2 flex p-4">
          <div className='text-richblack-300 text-center flex-col w-[10%] font-inter font-bold'>
            {/* bg has gradient create it */}
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
          </div>
          <div className={`w-[90%] flex flex-col font-bold font-mono   pr-2 text-yellow-200`}>
               <div>
                <TypeAnimation
                  sequence={[
                    codeblock , 10000 ,""
                  ]}
                  // wrapper="span"
                  // speed={5}
                  repeat={Infinity}
                  cursor={true}
                />
                </div>
          </div>
          </div>
    </div>
  )
}

export default CodeBlocks
