import { useState } from "react";
import addTask from "../helpers/addTask";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [dateTime, setDateTime] = useState("");
  const url = "http://127.0.0.1:8000/api/";
  const data = { task_definition: task, due_time: dateTime };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(url, data);
    setTask("");
    setDateTime("");
  };

  return (
    <section className="bg-darkgray">
      <h1 className="text-4xl bg-darkgray text-white text-center py-5">
        Tasks
      </h1>
      <form onSubmit={handleSubmit} className="flex justify-evenly items-end">
        <div>
          <label htmlFor="task" className="text-white block p-1">
            Task
          </label>
          <input
            type="text"
            name="task"
            id="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a new task..."
            className="rounded-xl p-1 bg-lightgray w-96"
          />
        </div>
        <div>
          <label htmlFor="dateTime" className="text-white block p-1">
            Due date time
          </label>
          <input
            type="datetime-local"
            name="dateTime"
            id="dateTime"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            placeholder="Enter due date time..."
            className="rounded-xl p-1 bg-lightgray w-36"
          />
        </div>
        <button type="submit" className="bg-orange text-white p-1 rounded-xl">
          Add Task
        </button>
      </form>
    </section>
  );
};

export default TaskInput;
