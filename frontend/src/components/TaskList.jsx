import { useFetchTasks } from "../helpers/useFetchTasks";

import SingleTask from "./SingleTask";

const url = "http://127.0.0.1:8000/api/";

const TaskList = ({ isError, isLoading, tasks, editTask, deleteTask }) => {
  if (isLoading) {
    return <section>Loading...</section>;
  }
  if (isError) {
    return <section>Something went wrong...</section>;
  }

  return (
    <section className="mb-4 p-1 mx-auto lg:max-w-5xl">
      {tasks?.map((task) => {
        return (
          <SingleTask
            key={task.id}
            {...task}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        );
      })}
    </section>
  );
};

export default TaskList;
