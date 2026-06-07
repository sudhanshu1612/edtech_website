
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        {/* section1 */}
        <div className="mt-16 p-1 relative mx-auto flex flex-col w-11/12 items-center text-white bg-black justify-between
        transition-all duration-200 rounded-lg">
        <div>
            <Link to={"/signup"}>
                 <div className="mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit">
                    <div className="flex items-center gap-2 rounded-full px-10 py-5">
                        <p>Become an instructor</p>
                        <FaArrowRight />
                    </div>
                 </div>
            </Link>
        </div>
        </div>
        {/* section2 */}

        {/* section3 */}

        {/* footer */}
    </div>
  )
}

export default Home
