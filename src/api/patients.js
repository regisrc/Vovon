import axios from "./axiosInstance";
import useSWR from "swr";
import { useAuthDataContext } from "../components/Auth";

export const PatientsSWR = () => {
  const { token } = useAuthDataContext();

  const url = "/dashboard";

  const { data, error, mutate } = useSWR(
    url,
    async (url) => {
      const response = await axios.get(url, {
        headers: { Authorization: token },
      });

      return response.data;
    },
    { refreshInterval: 10000 }
  );

  return { data, error, mutate };
};

export const Patients = () => {
  const { token } = useAuthDataContext();

  const url = `/dashboard`;

  const request = async () => {
    return await axios(url, { headers: { Authorization: token } });
  };

  return request();
};

export const Patient = (id) => {
  const { token } = useAuthDataContext();

  const url = `prontuario`;

  const headers = {
    headers: {
      Authorization: token,
    },
  };

  const request = async (id, headers) => {
    return await axios.post(url, { id: id }, headers);
  };

  return request(id, headers);
};

export const Sensors = (id) => {
  const { token } = useAuthDataContext();

  const url = `sensores`;

  const headers = {
    headers: {
      Authorization: token,
    },
  };

  const request = async (id, headers) => {
    return await axios.post(url, { id: id }, headers);
  };

  return request(id, headers);
};

export const Alerts = (data, token) => {

  const url = `alertas`;

  const body = {
    descricao: data.desc,
    nivelAlerta: data.alertLevel,
    regras: [
      {
        tipoOperacao: data.operationType,
        valorReferencia: data.referenceValue,
        tipoSensor: data.sensorType,
      },
    ],
  };

  const headers = {
    headers: {
      Authorization: token,
    },
  };

  const request = async (body, headers) => {
    return await axios.post(url, body, headers);
  };

  return request(body, headers);
};

export const GetAlerts = () => {
  const { token } = useAuthDataContext();

  const url = `alertas`;

  const headers = {
    headers: {
      Authorization: token,
    },
  };

  const request = async (headers) => {
    return await axios.get(url, headers);
  };

  return request(headers);
};

export const Admeasurement = (data, token) => {

  const url = `afericao`;

  const body = {
    id: data.id,
    temp: data.temp,
    oxig: data.oxig,
    bpm:  data.bpm,
  };

  const headers = {
    headers: {
      Authorization: token,
    },
  };

  const request = async (body, headers) => {
    return await axios.post(url, body, headers);
  };

  return request(body, headers);
};

export const Updates = () => {
  const { token } = useAuthDataContext();

  const url = `updates`;

  const headers = {
    headers: {
      Authorization: token,
    },
  };

  const request = async (headers) => {
    return await axios.get(url, headers);
  };

  return request(headers);
};

export default PatientsSWR;
