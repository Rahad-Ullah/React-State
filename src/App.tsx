import { useState } from "react";
import "./App.css";
import CounterWithFunc from "./components/CounterWithFunc";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="border-2 border-purple-500 p-10">
      {/* <h1 className="text-3xl">React State</h1> */}
      <h1 className="text-2xl">{count}</h1>
      <CounterWithFunc count={count} setCount={setCount} />
    </div>
  );
}

export default App;
