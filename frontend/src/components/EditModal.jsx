import { useState } from "react";

const EditModal = ({
  id,
  task_definition,
  is_done,
  due_time,
  setIsEditOpen,
}) => {
  const [newTaskDefinition, setNewTaskDefinition] = useState(task_definition);
  const [newDueTime, setNewDueTime] = useState(new Date(due_time));
  return (
    <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-darkgray text-white max-w-5xl mx-1 p-2 pb-3 mb-2">
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
          <input
            type="datetime-local"
            name="dateTime"
            id="dateTime"
            value={newDueTime}
            onChange={(e) => setNewDueTime(e.target.value)}
            placeholder="Enter due date time..."
            className="rounded-xl p-1 bg-lightgray w-96"
          />
        </div>
        <div className="flex gap-5">
          <label htmlFor="completed" className="text-white ">
            Is the Task Completed?
          </label>
          <input type="checkbox" name="completed" id="completed" />
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
