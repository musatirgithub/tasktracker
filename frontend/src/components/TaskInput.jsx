import { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [dateTime, setDateTime] = useState("");
  const url = "https://forpythonanywhere1.pythonanywhere.com/api/";
  const data = { task_definition: task, due_time: dateTime };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(url, data);
    setTask("");
    setDateTime("");
  };

  const handleTaskEntry = (e) => {
    if (e.target.value.length > 25) {
      setTask(e.target.value.substring(0, 25));
    } else setTask(e.target.value);
  };
  return (
    <section className="bg-black mx-auto lg:max-w-5xl ">
      <div className=" p-1">
        <form
          onSubmit={handleSubmit}
          className="bg-darkgray p-2 pb-3 mb-2  flex flex-col items-center justify-start gap-2 lg:flex-row lg:justify-evenly lg:items-end"
        >
          <div>
            <label htmlFor="task" className="text-white block p-1">
              Task
            </label>
            <input
              type="text"
              name="task"
              id="task"
              value={task}
              onChange={(e) => handleTaskEntry(e)}
              placeholder="Enter a new task..."
              className="rounded-xl p-1 bg-lightgray w-[20rem] lg:w-[38rem]"
            />
          </div>
          <div>
            <label htmlFor="dateTime" className="text-white block p-1">
              Deadline
            </label>
            <input
              type="datetime-local"
              name="dateTime"
              id="dateTime"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              placeholder="Enter due date time..."
              className="rounded-xl p-1 bg-lightgray w-[20rem] lg:w-48"
            />
          </div>
          <button
            type="submit"
            className="bg-orange text-white p-1 rounded-xl w-24 mt-4 lg:mt-0"
          >
            Add Task
          </button>
        </form>
      </div>
    </section>
  );
};

export default TaskInput;
