import { useEffect, useState } from "react";
import EditModal from "./EditModal";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

const url = "https://forpythonanywhere1.pythonanywhere.com/api/";

const SingleTask = ({
  id,
  task_definition,
  is_done,
  due_time,
  editTask,
  deleteTask,
}) => {
  const myDateTime = new Date(due_time);
  const [currentDateTime, setCurrentDateTime] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleDelete = (id) => {
    deleteTask(url + id + "/");
  };
  useEffect(() => {
    setCurrentDateTime(new Date());
  }, []);

  return (
    <div
      key={id}
      className="static flex justify-between items-center bg-darkgray mb-1 p-2"
    >
      <div className=" w-[22rem]">
        <p
          className={`${
            is_done
              ? "text-done text-lg font-bold line-through lg:text-2xl capitalize"
              : currentDateTime > myDateTime
              ? "text-deadlinepassed text-lg font-bold lg:text-2xl capitalize"
              : "text-orange text-lg font-bold lg:text-2xl capitalize"
          }`}
        >
          {myDateTime.getUTCDate() - currentDateTime?.getUTCDate() < 2 &&
            !is_done && (
              <span>
                <BsFillExclamationTriangleFill className="inline pe-2 pb-1 w-[1.8rem]" />
              </span>
            )}
          {task_definition}
        </p>
        <p
          className={`${
            is_done
              ? "text-done text-sm lg:text-md line-through"
              : "text-white text-sm lg:text-md"
          }`}
        >{`Deadline: ${myDateTime.toUTCString().substring(0, 22)}`}</p>
        {currentDateTime > myDateTime && !is_done && (
          <p className="text-white text-sm font-bold lg:text-md">
            Unfortunately deadline has passed
          </p>
        )}
        {myDateTime.getUTCDate() - currentDateTime?.getUTCDate() < 2 &&
          currentDateTime < myDateTime &&
          !is_done && (
            <p className="text-white text-sm font-bold lg:text-md">
              Deadline is coming...
            </p>
          )}
      </div>
      <div className="flex flex-wrap gap-2 justify-center items-center">
        <button
          type="button"
          onClick={() => setIsEditOpen(true)}
          className="text-green text-center bg-white py-[0,5rem] rounded-xl w-[3rem]"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => handleDelete(id)}
          className="text-red text-center bg-white py-[0,5rem] rounded-xl w-[3rem]"
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
          editTask={editTask}
        />
      )}
    </div>
  );
};

export default SingleTask;
