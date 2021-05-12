import axios from "axios";

const ExecuteLogin = (login, password) => {
  const request = {
    username: login,
    password: password,
  };

  axios
    .post(
      `https://1ixzg5dyf1.execute-api.sa-east-1.amazonaws.com/Stage/login`,
      request
    )
    .then((res) => {
      console.log(res.data);
    });

  if (login === "vovon" && password === "12345") return true;

  return false;
};

export default ExecuteLogin;
