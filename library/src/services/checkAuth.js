import toast from "react-hot-toast";

export const checkAuth = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    toast.error("You must be logged in!");
    return false;
  }
  return true;
};