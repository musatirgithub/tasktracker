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
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <br />
        <input
          type="datetime-local"
          name="dateTime"
          id="dateTime"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </section>
  );
};

export default TaskInput;
