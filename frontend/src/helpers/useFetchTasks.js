import { useState, useEffect } from "react";

export const useFetchTasks = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async (url) => {
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      const data = await resp.json();
      setTasks(data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchTasks(url);
  }, [tasks]);
  return { isError, isLoading, tasks };
};
