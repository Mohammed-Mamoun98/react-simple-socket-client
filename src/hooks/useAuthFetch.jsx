import { useState, useEffect } from "react";
import Axios from "axios";
import { getToken } from "../utils/auth";
import useLoaded from "./useLoaded";

export default function useAuthFetch(url, method, deps) {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, serError] = useState("");
  const [counter, setCounter] = useState(0);
  const [loaded] = useLoaded();

  const token = getToken();

  const authAxios = Axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const addCounter = () => {
    setCounter((c) => c + 1);
  };

  const reFetch = () => {
    addCounter();
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const rawResponse = await authAxios({
        method,
        url,
      });
      const response = rawResponse.data;
      setLoading(false);

      setData(response);
    } catch (_error) {
      setLoading(false);
      serError(_error);
    }
  };

  useEffect(() => {
    if (loaded) fetchData();
  }, [deps, counter]);
  return { data, loading, error, reFetch };
}
