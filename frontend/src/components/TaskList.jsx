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
        return (
          <div key={id}>
            <p>{id}</p>
            <p className="text-3xl font-bold underline">{task_definition}</p>
            <p>{is_done}</p>
            <p>{due_time}</p>
            <button type="button" onClick={() => handleEdit(id)}>
              Edit
            </button>
            <button type="button" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default TaskList;
