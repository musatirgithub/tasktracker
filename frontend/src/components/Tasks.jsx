import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const Tasks = () => {
  return (
    <section className="relative bg-black min-h-screen">
      <h1 className="text-4xl lg:max-w-5xl text-white text-center py-5 mx-auto">
        Tasks
      </h1>
      <TaskInput />
      <TaskList />
    </section>
  );
};

export default Tasks;
