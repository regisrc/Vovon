import axios from "./axiosInstance";

const Auth = async (token) => {
  const request = {
    token: token    
  };
  return await axios.post("/login/auth", request);
};

export default Auth;
