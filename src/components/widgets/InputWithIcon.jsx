import Input from "../elements/Input";

const InputWithIcon = ({ icon:Icon,error,className = "",...props}) => {
  return (
      <div className="relative flex items-center">
      {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4B5563] text-lg" />}
      <Input
        {...props}
        error={error}
        className={`pl-10 pr-4 py-2 ${className}`}
      />
     
    </div>
  );
};

export default InputWithIcon;