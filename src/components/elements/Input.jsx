const Input = ({ type, id, name, placeholder, className, value, onChange }) => {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-sm border border-[#C8CED9] text-sm text-[#5B6B86] placeholder-[#5B6B86] outline-none font-normal transition-all duration-200
         focus:border-[#0069A8] placeholder:text-sm ${className}`}
      />
    </>
  );
};

export default Input;
