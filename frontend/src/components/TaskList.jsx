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
              <p
                className={`${
                  is_done
                    ? "text-done text-lg font-bold line-through lg:text-2xl capitalize"
                    : "text-orange text-lg font-bold lg:text-2xl capitalize"
                }`}
              >
                {task_definition}
              </p>
              <p
                className={`${
                  is_done
                    ? "text-done text-sm lg:text-md line-through"
                    : "text-white text-sm lg:text-md"
                }`}
              >{`Deadline: ${myDateTime.toLocaleString()}`}</p>
            </div>
            <div>
              <button
                type="button"
                onClick={() => handleEdit(id)}
                className="text-green bg-white px-2 py-[0,5rem] rounded-xl me-1"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => handleDelete(id)}
                className="text-red bg-white px-2 py-[0,5rem] rounded-xl"
              >
                Del
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TaskList;
