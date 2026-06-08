import React from 'react';
import { Link } from 'react-router-dom';

const CTAButton = ({ children, active, Linkto }) => {
  return (
    <Link to={Linkto}>
      <div
        className={`px-4 py-2 rounded-lg transition-all duration-200 hover:scale-95 w-fit ${
          active ? 'bg-yellow-700' : 'bg-yellow-400'
        }`}
      >
        {children}
      </div>
    </Link>
  );
};

export default CTAButton;