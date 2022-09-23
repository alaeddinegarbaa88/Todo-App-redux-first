const Todo = ({title,isDone}) => {
    console.log("this is the title",title)
  return (
    <>
      <h1>title: {title}</h1>
      <p>status: {isDone?"Done":"waiting"}</p>
    </>
  );
};

export default Todo;
