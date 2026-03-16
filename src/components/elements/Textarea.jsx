const Textarea = ({
  className = "",
  varient,
  label,
  disabled,
  required,
  placeholder,
  resize,
}) => {
  return (
    <textarea
      className={`${className} w-full px-2 py-4 bg-${varient} border border-gray-300 rounded-sm resize-${resize} text-gray-600 text-sm font-normal leading-none tracking-normal outline-none focus:border-[#0069A8] transition-all duration-200 ease-in-out`}
      disabled={disabled}
      required={required}
      placeholder={placeholder}
    >
      {label}
    </textarea>
  );
};

export default Textarea;
