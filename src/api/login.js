import axios from "axios";

const ExecuteLogin = async (login, password) => {
  const request = {
    username: login,
    password: password,
  };
  try {
    const response = await axios.post(
      `https://1ixzg5dyf1.execute-api.sa-east-1.amazonaws.com/Stage/login`,
      request
    );

    return response;
  } catch (error) {
    console.error(error);

    return false;
  }
};

export default ExecuteLogin;
