import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CTAButton from '../components/Button';

const Home = () => {
  return (
    <div>
      {/* section1 */}
      <div className="pt-16 p-1 relative mx-auto flex flex-col w-11/12 items-center justify-between transition-all duration-200 rounded-lg gap-y-5">

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

      </div>

      {/* section2 */}

      {/* section3 */}

      {/* footer */}
    </div>
  );
};

export default Home;