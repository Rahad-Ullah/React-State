import { ChangeEvent, useReducer } from "react";
type TAction = {
  type: string;
  payload: string;
};

const initialState = {
  name: "",
  age: "",
  hobbies: [] as string[],
};

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addAge":
      return { ...currentState, age: action.payload };
    case "addHobbies":
      return {
        ...currentState,
        hobbies: [...currentState.hobbies, action.payload],
      };
    default:
      return currentState;
  }
};

const UserInfoWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => dispatch({ type: "addName", payload: e.target.value })}
        type="text"
        name="name"
        id="name"
        placeholder="name"
        className="input input-bordered"
      />
      <input
        onChange={(e) => dispatch({ type: "addAge", payload: e.target.value })}
        type="text"
        name="age"
        id="age"
        placeholder="age"
        className="input input-bordered"
      />
      <input
        onBlur={(e) =>
          dispatch({ type: "addHobbies", payload: e.target.value })
        }
        type="text"
        name="hobbies"
        id="hobbies"
        placeholder="hobbies"
        className="input input-bordered"
      />
      <input type="submit" className="btn btn-primary" />
    </form>
  );
};

export default UserInfoWithUseReducer;
