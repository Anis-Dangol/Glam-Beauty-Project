import { MdOutlineMail } from "react-icons/md";
import { SlLock } from "react-icons/sl";
import loginImage from "../assets/loginImage.jpg";
import InputWithIcon from "../components/widgets/InputWithIcon";
import Input from "../components/elements/Input";
import Button from "../components/elements/Button";

const Register = () => {
  return (
    <div
      className="grow flex items-center justify-center px-6 bg-no-repeat bg-right bg-cover"
      style={{ backgroundImage: `url(${loginImage})` }}
    >
      <div className="w-full max-w-80.5 -translate-x-25">
        <div className="space-y-2 text-center p-2">
          <h1 className="text-[16px] tracking-[3px] text-[#5B4636] font-bold pb-3">
            CREATE AN ACCOUNT
          </h1>
          
          <div className="grid grid-cols-2 gap-2">
            <Input
              placeholder="first name"
              type="text"
              id="email"
              name="email"
              className="px-2 py-2"
            />
            <Input
              placeholder="last name"
              type="text"
              id="email"
              name="email"
              className="px-2 py-2"
            />
          </div>

          <InputWithIcon
            icon={MdOutlineMail}
            placeholder="email"
            type="text"
            id="email"
            name="email"
          />
          <InputWithIcon
            icon={SlLock}
            placeholder="password"
            type="text"
            id="password"
            name="password"
          />
          <InputWithIcon
            icon={SlLock}
            placeholder="password"
            type="text"
            id="password"
            name="password"
          />

          <Button className="bg-[#895E39] rounded-sm py-2 text-white text-sm">Create Account</Button>

          <p className="text-xs text-start text-gray-500 py-2">
            Already have an account?{" "}
            <span className="text-[#8A6A45] cursor-pointer">
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
