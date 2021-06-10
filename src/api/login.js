import axios from "./axiosInstance";

const ExecuteLogin = async (login, password) => {
  const request = {
    username: login,
    password: password,
  };
  return await axios.post("/login", request);
};

export default ExecuteLogin;
