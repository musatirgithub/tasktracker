import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
const url = "https://forpythonanywhere1.pythonanywhere.com/api/";

const EditModal = ({
  id,
  task_definition,
  is_done,
  due_time,
  setIsEditOpen,
  editTask,
}) => {
  const [newTaskDefinition, setNewTaskDefinition] = useState(task_definition);
  const [newDueTime, onChange] = useState(
    new Date(due_time.substring(0, due_time.length - 1))
  );
  const [newIsDone, setNewIsDone] = useState(is_done);
  const timeDiff = parseInt(
    newDueTime
      .toString()
      .substring(
        newDueTime.toString().indexOf("(") + 5,
        newDueTime.toString().indexOf("(") + 7
      )
  );
  const timeDiffOperator =
    newDueTime
      .toString()
      .substring(
        newDueTime.toString().indexOf("(") + 4,
        newDueTime.toString().indexOf("(") + 5
      ) === "+";
  let dynamicDate = "";

  if (timeDiffOperator) {
    dynamicDate = new Date(newDueTime.getTime() + timeDiff * 60 * 60 * 1000);
  } else {
    dynamicDate = new Date(newDueTime.getTime() - timeDiff * 60 * 60 * 1000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(`${url}${id}/`, {
      task_definition: newTaskDefinition,
      is_done: newIsDone,
      due_time: dynamicDate,
    });
    setIsEditOpen(false);
  };

  const handleEditTask = (e) => {
    if (e.target.value.length > 25) {
      setNewTaskDefinition(e.target.value.substring(0, 25));
    } else {
      setNewTaskDefinition(e.target.value);
    }
  };
  return (
    <section className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bgverylight text-white max-w-5xl mx-1 p-2 pb-3 mb-2 lg:top-1/2">
      <form
        onSubmit={handleSubmit}
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
            onChange={(e) => handleEditTask(e)}
            placeholder="Enter a new task..."
            className="rounded-xl text-black p-1 bg-lightgray w-96"
          />
        </div>
        <div>
          <label htmlFor="dateTime" className="text-white block p-1">
            Deadline
          </label>
          <DateTimePicker
            className="rounded-xl p-1 bg-lightgray w-96 text-black"
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
        >
          Save
        </button>
      </form>
    </section>
  );
};

export default EditModal;
