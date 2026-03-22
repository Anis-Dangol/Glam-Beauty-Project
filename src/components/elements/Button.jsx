const Button = ({
  buttonId = "",
  children,
  type = "button",
  className = "",
  ...props
}) => {
  return (
    <button
      id={buttonId}
      type={type}
      className={`w-full text-sm py-2 rounded-sm cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
