import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CTAButton from '../components/Button';
import Banner from '../asset/Asset/Image/banner.mp4';
import CodeBlocks from '../components/CodeBlocks';
import HighlightText from '../components/HighlightText';

const Home = () => {
  return (
    <div className=''>
      {/* section1 */}
      <div className="pt-16 p-1 relative mx-auto flex flex-col w-11/12 items-center justify-between transition-all duration-200 rounded-lg gap-y-5 ">

        <Link to="/signup">
          <div className="mx-auto rounded-full bg-richblue-400 font-bold text-white transition-all duration-200 hover:scale-95 hover:bg-richblue-500 w-fit">
            <div className="flex items-center gap-2 rounded-full px-6 py-3">
              <p>Become an instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-4xl text-white font-bold text-center">
          Empower Your Future With{' '}
          <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text">
            Coding Skills
          </span>
        </div>

        <div className="text-white text-xl font-semibold text-center">
          With our online coding courses, you can learn at your own pace,
          from anywhere in the world, and get access to a wealth of
          resources, including hands-on projects, quizzes, and personalized
          feedback from instructors.
        </div>

        <div className="flex flex-row gap-7 mt-8">
          <CTAButton Linkto="/learn-more">
            Learn More
          </CTAButton>

          <CTAButton active={true} Linkto="/book-demo">
            Book a Demo
          </CTAButton>
        </div>

        <div className="shadow-[0_0_80px_rgba(29,78,216,0.6)] w-7/12 my-10">
          <video 
          muted 
          loop 
          autoPlay
          className='rounded-sm'>
              <source src={Banner} type="video/mp4" />
          </video>
        </div>

         {/* code section 1 */}
        <div>
            <CodeBlocks 
              position= {"flex-row"} 
              heading={
                          <div className='text-4xl text-white font-semibold'>
                            unlock your <HighlightText text={" coding potential "}></HighlightText> with our online courses
                          </div>
                      } 
              subheading ={
                             "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                          }
              ctabtn1={
                         {
                            btnText:"try it yourself",
                            linkto: "/signup",
                            active: true,
                         }
                      }
              ctabtn2={
                         {
                            btnText:"learn more",
                            linkto: "/login",
                            active: false,
                         }
                      }
              codeblock={
                           `<!DOCTYPE html>
                            <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <title>Document</title>
                            </head>
                            <body>

                                <h1>Hello World</h1>
                                <p>This is a paragraph.</p>

                            </body>
                            </html>`
                        }
            ></CodeBlocks>
        </div>
        {/* code section 2 */}
        <div>
            <CodeBlocks 
              position= {"flex flex-row-reverse"} 
              heading={
                          <div className='text-4xl text-white font-semibold'>
                            Start   
                            <HighlightText text={"   coding in seconds"}></HighlightText>
                          </div>
                      } 
              subheading ={
                             "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                          }
              ctabtn1={
                         {
                            btnText:"continue Lesson",
                            linkto: "/signup",
                            active: true,
                         }
                      }
              ctabtn2={
                         {
                            btnText:"learn more",
                            linkto: "/login",
                            active: false,
                         }
                      }
              codeblock={
                           `<!DOCTYPE html>
                            <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <title>Document</title>
                            </head>
                            <body>

                                <h1>Hello World</h1>
                                <p>This is a paragraph.</p>

                            </body>
                            </html>`
                        }
            ></CodeBlocks>
        </div>
      </div>
      {/* section2 */}

      {/* section3 */}

      {/* footer */}
    </div>
  );
};

export default Home;