import { FormEvent, useContext, useState } from "react";
import { TTodo, TodoContext } from "../../context/TodoProvider";

const TodoForm = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [task, setTask] = useState("");
  console.log(state);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const todo: TTodo = {
      id: "dfadsfadsf",
      title: task,
      isCompleted: false,
    };

    dispatch({type: 'addTodo', payload: todo})
  };

  return (
    <div>
      <h1>Add Todo</h1>
      <form onSubmit={handleSubmit} className="space-x-4">
        <label htmlFor="Todo">Task</label>
        <input
        className="input input-bordered"
          type="text"
          name="todo"
          id="todo"
          onBlur={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
