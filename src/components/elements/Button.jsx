import React from 'react'

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-sm py-2 text-center rounded-sm ${className}`}
    >
      {children}
    </button>
  );
};

export default Button
