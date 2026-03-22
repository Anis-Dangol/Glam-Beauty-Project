export const logoutUser = () => {
  localStorage.removeItem("currentUser");
};


export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};