import axios from "./axiosInstance";
import useSWR from "swr";
import { useAuthDataContext } from '../components/Auth'

export const PatientsSWR = () => {
  const { token } = useAuthDataContext();

  const url =
    "/dashboard";

  const { data, error, mutate } = useSWR(
    url,
    async (url) => {
      const response = await axios.get(url, {headers: {'Authorization': token}});

      return response.data;
    },
    { refreshInterval: 10000 }
  );

  return { data, error, mutate };
};

export const Patients = () => {
    const { token } = useAuthDataContext();

    const url =
      `/dashboard`;

    const request = async () => {
      return await axios(url, {headers: {'Authorization': token}});
    }

    return request();
};

export const Patient = (id) => {
  const { token } = useAuthDataContext();

  const url =
    `prontuario`;

  const headers =
  {
    headers: {
      'Authorization': token
    }
  };

  const request = async (id, headers) => {
    return await axios.post(url, {id : id}, headers);
  }

  return request(id, headers);
};

export const Sensors = (id) => {
  const { token } = useAuthDataContext();

  const url =
    `sensores`;

  const headers =
  {
    headers: {
      'Authorization': token
    }
  };

  const request = async (id, headers) => {
    return await axios.post(url, {id : id}, headers);
  }

  return request(id, headers);
};

export default PatientsSWR;
