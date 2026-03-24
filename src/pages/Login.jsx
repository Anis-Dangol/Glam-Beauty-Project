import React, { useContext, useState } from "react";

import InputWithIcon from "../components/widgets/InputWithIcon";
import { MdOutlineMail } from "react-icons/md";
import { SlLock } from "react-icons/sl";
import Button from "../components/elements/Button";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "sonner";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};
    const email = form.email.toLowerCase().trim();

    if (!email) {
      newErrors.email = "Email is required";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const user = login(form);
    if (!user) {
      setErrors({
        email: "Invalid email or password",
        password: "Invalid email or password",
      });
      return;
    }
    toast.message("Login successful!", {
      description: `Welcome back, ${user.firstName}!`,
      duration: 4000,
      type: "success",
    });
    localStorage.setItem("currentUser", JSON.stringify(user));
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-3 text-center p-2">
      <h1 className="text-[16px] tracking-[3px] text-[#5B4636] font-bold pb-3">
        LOGIN
      </h1>

      <InputWithIcon
        icon={MdOutlineMail}
        placeholder="email"
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        error={errors.email}
      />
      <InputWithIcon
        icon={SlLock}
        placeholder="password"
        type="password"
        id="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        error={errors.password}
      />

      <div className="text-right text-xs text-gray-500 py-2">
        Forgot password?
      </div>

      <Button
        type="submit"
        className="bg-[#895E39] rounded-sm py-2 text-white text-sm"
      >
        Login
      </Button>

      <p className="text-xs text-start text-gray-500 py-2">
        Don't have an account yet?{" "}
        <Link to="/register" className="text-[#8A6A45] cursor-pointer">
          create an account
        </Link>
      </p>
    </form>
  );
};

export default Login;
