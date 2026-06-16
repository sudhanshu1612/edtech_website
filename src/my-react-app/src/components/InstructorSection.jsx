import React from 'react'
import HighlightText from './HighlightText'
import CTAButton from './Button'
import { FaArrowRight } from 'react-icons/fa'
import i2 from '../asset/Asset/Image/i2.png'

const InstructorSection = () => {
  return (
    <div className='flex mt-24 justify-evenly items-center'>
        <div className='w-2/5'>
             <img src={i2}></img>
        </div>
        <div className=' w-2/5 gap-10 flex flex-col'>
            <div className='text-4xl font-bold flex flex-col'>
                Become an 
                <HighlightText text={" Instructor "}></HighlightText>
            </div>
            <div className='text-richblack-50 font-semibold'>
                Instructors from around the world teach millions of students
                 on StudyNotion. We provide the tools and skills to teach what you love.
            </div>
            <div>
                <CTAButton active={false}>
                    <div className='flex items-center gap-2'> 
                        <div>Start Teaching Today</div>
                        <FaArrowRight></FaArrowRight> 
                    </div>
                </CTAButton>
            </div>
        </div>
    </div>
  )
}

export default InstructorSection