import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

const EditModal = ({
  id,
  task_definition,
  is_done,
  due_time,
  setIsEditOpen,
}) => {
  const conv = new Date(due_time);
  const myDateTime = `${conv.getFullYear()}-${conv.getMonth()}-${conv.getDate()}T${conv.getHours()}:${conv.getMinutes()}`;
  const [newTaskDefinition, setNewTaskDefinition] = useState(task_definition);
  const [newDueTime, onChange] = useState(new Date(due_time));
  const [newIsDone, setNewIsDone] = useState(is_done);
  return (
    <section className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-darkgray text-white max-w-5xl mx-1 p-2 pb-3 mb-2 lg:top-1/2">
      <form
        // onSubmit={handleSubmit}
        className="flex flex-col items-center justify-start gap-2"
      >
        <div>
          <label htmlFor="task" className="text-white block p-1">
            Task
          </label>
          <input
            type="text"
            name="task"
            id="task"
            value={newTaskDefinition}
            onChange={(e) => setNewTaskDefinition(e.target.value)}
            placeholder="Enter a new task..."
            className="rounded-xl p-1 bg-lightgray w-96"
          />
        </div>
        <div>
          <label htmlFor="dateTime" className="text-white block p-1">
            Deadline
          </label>
          <DateTimePicker
            className="rounded-xl p-1 bg-lightgray w-96"
            onChange={onChange}
            value={newDueTime}
          />
        </div>
        <div className="flex gap-5">
          <label htmlFor="completed" className="text-white ">
            Is the Task Completed?
          </label>
          <input
            type="checkbox"
            name="completed"
            id="completed"
            checked={newIsDone}
            onChange={(e) => setNewIsDone(e.target.checked)}
          />
        </div>
        <button
          type="submit"
          className="bg-orange text-white p-1 rounded-xl w-24 mt-4"
          onClick={() => setIsEditOpen(false)}
        >
          Save
        </button>
      </form>
    </section>
  );
};

export default EditModal;
