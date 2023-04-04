import { useState } from "react";
import { useFetchTasks } from "../helpers/useFetchTasks";
import deleteTask from "../helpers/deleteTask";
import editTask from "../helpers/editTask";

const url = "http://127.0.0.1:8000/api/";

const TaskList = () => {
  const { isError, isLoading, tasks } = useFetchTasks(url);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleDelete = (id) => {
    deleteTask(url + id + "/");
  };

  const handleEdit = (id) => {
    editTask(url + id + "/", {
      task_definition: "this is updated task",
      due_time: "2023-04-24T20:45:00Z",
    });
    setIsEditOpen(true);
  };

  if (isLoading) {
    return <section>Loading...</section>;
  }
  if (isError) {
    return <section>Something went wrong...</section>;
  }

  return (
    <section>
      {tasks.map((task) => {
        const { id, task_definition, is_done, due_time } = task;
        const myDateTime = new Date(due_time);
        return (
          <div
            key={id}
            className="flex justify-between items-center bg-darkgray mb-1 p-2"
          >
            <div>
              <p className="text-orange text-lg font-bold underline lg:text-2xl ">
                {task_definition}
              </p>
              <p className="text-white text-sm lg:text-md">{`Deadline: ${myDateTime.toLocaleString()}`}</p>
            </div>
            <div>
              <button type="button" onClick={() => handleEdit(id)}>
                Edit
              </button>
              <button type="button" onClick={() => handleDelete(id)}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TaskList;
