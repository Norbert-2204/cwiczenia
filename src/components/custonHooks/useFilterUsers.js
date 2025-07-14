import { useEffect, useState } from "react";

export const useFilterUsers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("wystąpił błąd z serwera");
        }
        const users = await response.json();
        setData(users);
      } catch (err) {
        setLoading(false);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { data, loading, error };
};
