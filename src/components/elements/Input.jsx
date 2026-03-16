const Input = ({ type, id, name,placeholder, className=""}) => {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={`w-full px-2 py-4 rounded-sm border border-[#C8CED9] text-sm text-[#5B6B86] outline-none font-normal transition-all duration-200
            focus:ring-2 focus:ring-[#0069A8]/30 focus:border-[#0069A8] ${className}`}
      />
    </>
  );
};

export default Input;
