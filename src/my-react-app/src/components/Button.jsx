import React from 'react';
import { Link } from 'react-router-dom';

const CTAButton = ({ children, active, Linkto }) => {
  return (
    <Link to={Linkto}>
      <div
        className={`px-4 py-2 text-white rounded-lg transition-all duration-200 hover:scale-95 w-fit ${
          active ? ' bg-richblack-700 text-white font-bold' : 'bg-yellow-200 text-black font-bold'
        }`}
      >
        {children}
      </div>
    </Link>
  );
};

export default CTAButton;