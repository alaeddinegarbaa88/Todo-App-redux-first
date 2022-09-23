import Todo from "./Todo";

const ListTodo = ({ jobs }) => {
  return (
    <>
      {jobs.map((job) => <Todo title={job.title} isDone={job.isDone} />)}
    </>
  );
};

export default ListTodo;
