const Button = ({ children, type = "button", className = "", ...props }) => {
  return (
    <button
      type={type}
      className={`w-full text-sm py-2 rounded-sm cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;