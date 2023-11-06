import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [counters, setCounter] = useState([0]);

  const handleAddCounter = () => {
    const newTab = [...counters];
    newTab.push(0);
    setCounter(newTab);
  };

  const handleClickPlus = (index) => {
    const newTab = [...counters];
    newTab[index]++;
    setCounter(newTab);
  };
  const handleClickMinus = (index) => {
    const newTab = [...counters];
    newTab[index]--;
    setCounter(newTab);
  };

  const handleReset = (index) => {
    const newTab = [...counters];
    newTab[index] = 0;
    setCounter(newTab);
  };
  return (
    <>
      <div className="App">
        {counters.length >= 3 ? null : (
          <button onClick={handleAddCounter}>Add Counter</button>
        )}
        {counters.map((counter, index) => {
          return (
            <Counter
              key={index}
              counter={counter}
              index={index}
              handleClickPlus={handleClickPlus}
              handleClickMinus={handleClickMinus}
              handleReset={handleReset}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
