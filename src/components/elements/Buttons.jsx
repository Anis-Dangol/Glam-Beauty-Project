import React from "react";

const Button = ({label, background, text, className, weight, size}) => {
    return(
        <button className={`border border-gray-400 rounded bg-${background} text-${text} ${className}`}>
            {label}
        </button>
    );
};

export default Button; 