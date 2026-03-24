import { MdOutlineMail } from "react-icons/md";
import { SlLock } from "react-icons/sl";

import InputWithIcon from "../components/widgets/InputWithIcon";
import Input from "../components/elements/Input";
import Button from "../components/elements/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getData, setData } from "../services/storage";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email";
    }

    const users = getData("users");
    const exists = users.find((u) => u.email === email);
    if (exists) newErrors.email = "Email already exists";

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
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

    const newUser = {
      id: crypto.randomUUID(),
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email.toLowerCase().trim(),
      password: form.password,
      address: null,
    };

    const users = getData("users");
    users.push(newUser);
    setData("users", users);
    toast.message("Register successful!", {
      description: `Hello, ${newUser.firstName}. You are successfully registered!`,
      duration: 4000,
      type: "success",
    });
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    navigate("/login");
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-2 text-center p-2">
      <h1 className="text-[16px] tracking-[3px] text-[#5B4636] font-bold pb-3">
        CREATE AN ACCOUNT
      </h1>

      <div className="grid grid-cols-2 gap-2">
        <Input
          placeholder="first name"
          type="text"
          id="firstName"
          name="firstName"
          className="px-2 py-2"
          value={form.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />
        <Input
          placeholder="last name"
          type="text"
          id="lastName"
          name="lastName"
          className="px-2 py-2"
          value={form.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />
      </div>

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
      <InputWithIcon
        icon={SlLock}
        placeholder="confirm password"
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
      />

      <Button
        type="submit"
        className="bg-[#895E39] rounded-sm py-2 text-white text-sm"
      >
        Create Account
      </Button>

      <p className="text-xs text-start text-gray-500 py-2">
        Already have an account?{" "}
        <Link to="/login" className="text-[#8A6A45] cursor-pointer">
          Login
        </Link>
      </p>
    </form>
  );
};

export default Register;
