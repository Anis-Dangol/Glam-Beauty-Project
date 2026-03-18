import { MdOutlineMail } from "react-icons/md";
import { SlLock } from "react-icons/sl";

import InputWithIcon from "../components/widgets/InputWithIcon";
import Input from "../components/elements/Input";
import Button from "../components/elements/Button";
import { Link } from "react-router-dom";

const Register = () => {
  return (
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
            <Link to="/login" className="text-[#8A6A45] cursor-pointer">
              Login
            </Link>
          </p>
        </div>
  );
};

export default Register;
