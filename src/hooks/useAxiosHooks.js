import { useCallback, useState } from "react";
import axios from "axios";
import { config } from "../config";
// import axiosInstance from "../config";

const useAxiosHooks = (initialValue) => {
  const [response, setResponse] = useState(initialValue);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const createApiRequest = useCallback(
    async ({ method, apiUrl, cb, payload, errCb }) => {
      setLoading(true);
      setError("");
      const api = `/data/2.5${apiUrl}&appid=${config.accessKey}`;
      try {
        const res = await axios[method](api, payload);
        setResponse(res?.data);
        setError("");
        cb?.(res?.data);
      } catch (err) {
        console.log(err?.response?.data);
        setError(
          err?.response?.data ? err?.response?.data?.message : "Not Found"
        );
        errCb?.(err?.response?.data);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return [response, createApiRequest, isLoading, setResponse, error];
};

export default useAxiosHooks;
