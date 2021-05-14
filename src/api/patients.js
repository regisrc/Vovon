import axios from "axios";
import useSWR from "swr";

export const Patients = () => {
  const url =
    "https://1ixzg5dyf1.execute-api.sa-east-1.amazonaws.com/Stage/dashboard";

  const { data, error, mutate } = useSWR(
    url,
    async (url) => {
      const response = await axios.get(url);

      return response.data;
    },
    { refreshInterval: 10000 }
  );

  return { data, error, mutate };
};

export default Patients;
