import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://ygrfj2idhl.execute-api.sa-east-1.amazonaws.com/Vovon2",
});

axiosInstance.CancelToken = axios.CancelToken;
axiosInstance.isCancel = axios.isCancel;

export default axiosInstance;
