import Input from "../elements/Input";

const InputWithIcon = ({ icon:Icon,...props}) => {
  return (
      <div className="relative">
      {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4B5563] text-lg" />}
      <Input
        {...props}
        className="
        pl-10
        pr-4
        p-2
        "
      />
     
    </div>
  );
};

export default InputWithIcon;