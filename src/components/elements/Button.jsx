import React from 'react'

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-sm py-1 rounded-sm ${className}`}
    >
      {children}
    </button>
  );
};

export default Button
