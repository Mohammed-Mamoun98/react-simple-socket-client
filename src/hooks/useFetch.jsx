import { useState, useEffect } from "react";
import Axios from "axios";
import useLoaded from "./useLoaded";

export default function useFetch(url, method = "GET", body, deps) {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);
  const [error, serError] = useState("");
  const [loaded] = useLoaded();
  // Axios.defaults.headers.common["Content-Type"] = "application/json";

  const addCounter = () => {
    setCounter((c) => c + 1);
  };

  const reFetch = () => {
    addCounter();
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      // const rawResponse = await fetch(url, { method });
      const rawResponse = await Axios({
        url,
        method,
        data: { ...body },
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
