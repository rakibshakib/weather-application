import { useCallback, useState } from "react";
import axios from "axios";
import { config } from "../config";
// import axiosInstance from "../config";

const useAxiosHooks = (initialValue) => {
  const [response, setResponse] = useState(initialValue);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const createApiRequest = useCallback(
    async ({ method, apiUrl, cb, payload }) => {
      setLoading(true);
      const api = `/data/2.5${apiUrl}&appid=${config.accessKey}`;
      try {
        const res = await axios[method](api, payload);
        setResponse(res?.data);
        cb?.(res?.data);
      } catch (err) {
        console.error({ err });
        setError(err.response ? err.response.data : err.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return [response, createApiRequest, isLoading, setResponse, error];
};

export default useAxiosHooks;
