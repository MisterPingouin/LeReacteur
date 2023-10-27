import "./App.css";
import { useState } from "react";
import ButtonAdd from "./components/ButtonAdd";
import ButtonRemove from "./components/ButtonRemove";
import Reset from "./components/Reset";

function App() {
  const [counter, setCounter] = useState(0);
  const handleClickPlus = () => {
    setCounter(counter + 1);
  };
  const handleClickRemove = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <>
      <div className="App">
        <ButtonRemove state={counter} setState={handleClickRemove} />
        <p>{counter}</p>
        <ButtonAdd state={counter} setState={handleClickPlus} />
      </div>
      <Reset setState={reset} />
    </>
  );
}

export default App;
