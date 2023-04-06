import { useState, useEffect } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
const baseurl = "http://127.0.0.1:8000/api/";

const Tasks = () => {
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
    fetchTasks(baseurl);
  }, []);

  const addTask = async (url, data) => {
    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log("Error:", error);
    }
    fetchTasks(baseurl);
  };

  const deleteTask = async (url) => {
    try {
      await fetch(url, {
        method: "DELETE",
      });
    } catch (error) {
      console.log("Error:", error);
    }
    fetchTasks(baseurl);
  };

  const editTask = async (url, data) => {
    try {
      await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log("Error:", error);
    }
    fetchTasks(baseurl);
  };

  return (
    <section className="relative bg-black min-h-screen">
      <h1 className="text-4xl lg:max-w-5xl text-white text-center py-5 mx-auto">
        Tasks
      </h1>
      <TaskInput addTask={addTask} />
      <TaskList
        editTask={editTask}
        deleteTask={deleteTask}
        isLoading={isLoading}
        isError={isError}
        tasks={tasks}
      />
    </section>
  );
};

export default Tasks;
