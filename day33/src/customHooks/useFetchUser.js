import { useEffect, useState } from "react";

export function useFetchUser(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const result = await res.json();
        setData(result);
      } catch (error) {
        setError("something went wrong!");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);
  return { data, error, loading };
}
