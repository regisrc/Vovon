import axios from "./axiosInstance";

const Auth = async () => {
  const token = localStorage.getItem("authToken");

  const request = {
    token: token    
  };
  return await axios.post("/login/auth", request);
};

export default Auth;
