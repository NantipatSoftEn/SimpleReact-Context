import React, { useContext } from "react";
import "./App.css";
import { CounterContext } from "./store/CounterProvider";
function App() {
  const { counter, addCounter, subCounter } = useContext(CounterContext);
  console.log(counter);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{counter}</h1>
        <div style={{ display: "flex" }}>
          <button onClick={() => addCounter(1)}>Add</button>
        </div>
        <button onClick={() => subCounter(1)}>Sub</button>
      </header>
    </div>
  );
}

export default App;
