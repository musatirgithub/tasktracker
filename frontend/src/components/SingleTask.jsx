import { useState } from "react";
import deleteTask from "../helpers/deleteTask";
import EditModal from "./EditModal";
const url = "http://127.0.0.1:8000/api/";

const SingleTask = ({ id, task_definition, is_done, due_time }) => {
  const myDateTime = new Date(due_time);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleDelete = (id) => {
    deleteTask(url + id + "/");
  };

  return (
    <div
      key={id}
      className="static flex justify-between items-center bg-darkgray mb-1 p-2"
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
          onClick={() => setIsEditOpen(true)}
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
      {isEditOpen && (
        <EditModal
          id={id}
          task_definition={task_definition}
          is_done={is_done}
          due_time={due_time}
          setIsEditOpen={setIsEditOpen}
        />
      )}
    </div>
  );
};

export default SingleTask;
