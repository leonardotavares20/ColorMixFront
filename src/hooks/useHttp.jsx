import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const sendRequest = useCallback(async (url, getData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();

      getData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message || "Something wrong");
    }
  }, []);

  return { isLoading, sendRequest, error };
};

export default useHttp;
