import React from "react";
import ChildCompnent from "./ChildCompnent";

type TProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CounterWithFunc = ({ count, setCount }: TProps) => {
  return (
    <div className="border-2 border-red-500 m-10 p-10">
      <button
        onClick={() => setCount(count + 1)}
        className="border bg-green-500 p-3 rounded-lg m-10"
      >
        Click for update
      </button>
      <ChildCompnent count={count} setCount={setCount} />
    </div>
  );
};

export default CounterWithFunc;
