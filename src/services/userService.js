import { getData, setData } from "./baseStorage";

export const registerUser = (user) => {
  const users = getData("users");
  users.push(user);
  setData("users", users);
};

export const loginUser = (email, password) => {
  const users = getData("users");
  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    return user;
  }

  return null;
};


export const logoutUser = () => {
  localStorage.removeItem("currentUser");
};


export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};