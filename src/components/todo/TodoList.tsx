import { useContext } from "react";
import { TTodo, TodoContext } from "../../context/TodoProvider";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);

  console.log(state);

  return (
    <div>
      {state.map((todo: TTodo, index: number) => (
        <h1
          onClick={() => dispatch({ type: "taskComplete", payload: todo })}
          key={index}
          className={`text-xl cursor-pointer ${
            todo.isCompleted && "line-through"
          }`}
        >
          {todo.title}
        </h1>
      ))}
    </div>
  );
};

export default TodoList;
