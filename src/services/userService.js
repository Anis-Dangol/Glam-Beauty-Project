import { toast } from "sonner";

export const logoutUser = () => {
  localStorage.removeItem("currentUser");
  toast.message("Logout successful!", {
      description: `You are logout successfully`,
      duration: 4000,
      type: "success",
    });
};


export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};