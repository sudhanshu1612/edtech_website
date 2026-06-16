import React from 'react'
import HighlightText from './HighlightText'
import knowYourProgress  from '../asset/Asset/Image/Know_your_progress.svg';
import compareWithOthers from '../asset/Asset/Image/Compare_with_others.png';
import planYourLesson from '../asset/Asset/Image/Plan_your_lessons.svg';
import CTAButton from './Button';

const LearningLanguageSection = () => {
  return (
    <div className='mt-48'>
    <div  className='flex flex-col gap-5 items-center'>
     
      <div className='text-4xl font-semibold text-center'>
             Your Swiss Knife for 
             <HighlightText text={" Learning any Language"}></HighlightText>
      </div>

      <div className='text-center text-richblack-600 mx-auto text-base mt-3 font-medium w-1/2'>
           Uding spin making learning multiple languages easy with 20+languages voice-over,
           progress tracking , custom schedule and more,
      </div>

      <div className='flex flex-row items-center justify-center'>
             <img src={knowYourProgress}
             alt="know your progress"
             className='object-contain -mr-32'
             />
              <img src={planYourLesson}
             alt="know your progress"
             className='object-contain'
             />
              <img src={compareWithOthers}
             alt="know your progress"
             className='object-contain -ml-48'
             />
      </div>

      <div className='w-fit mb-15'>
            <CTAButton active={false} linkto={"/signup"}>
                <div>
                  Learn More
                </div>
            </CTAButton>
      </div>
    </div>
    </div>
  )
}

export default LearningLanguageSection
