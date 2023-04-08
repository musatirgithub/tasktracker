import SingleTask from "./SingleTask";

const TaskList = ({ isError, isLoading, tasks, editTask, deleteTask }) => {
  if (isLoading) {
    return (
      <section className="m-8 text-white text-center text-4xl font-bold">
        Loading...
      </section>
    );
  }
  if (isError) {
    return (
      <section className="m-8 mx-auto text-white text-center text-4xl font-bold">
        Something went wrong...
      </section>
    );
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
