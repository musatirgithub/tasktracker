import { useFetchTasks } from "../helpers/useFetchTasks";
const url = "http://127.0.0.1:8000/api/";

const TaskList = () => {
  const { isError, isLoading, tasks } = useFetchTasks(url);

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
            <p>{task_definition}</p>
            <p>{is_done}</p>
            <p>{due_time}</p>
          </div>
        );
      })}
    </section>
  );
};

export default TaskList;
