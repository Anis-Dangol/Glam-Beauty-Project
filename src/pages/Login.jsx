import React from "react";

import InputWithIcon from "../components/widgets/InputWithIcon";
import { MdEmail } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { SlLock } from "react-icons/sl";
import Button from "../components/elements/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="space-y-2 text-center p-2">
          <h1 className="text-[16px] tracking-[3px] text-[#5B4636] font-bold pb-3">
            LOGIN
          </h1>
 
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

          <div className="text-right text-xs text-gray-500 py-2">
            Forgot password?
          </div>

          <Button className="bg-[#895E39] rounded-sm py-2 text-white text-sm">Login</Button>

          <p className="text-xs text-start text-gray-500 py-2">
            Don't have an account yet?{" "}
            <Link to="/register" className="text-[#8A6A45] cursor-pointer">
              create an account
            </Link>
          </p>
        </div>
  );
};

export default Login;
