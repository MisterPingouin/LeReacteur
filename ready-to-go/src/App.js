import "./App.css";
import { useState } from "react";
import Switch from "./components/Switch";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="App">
      <Switch state={switch1} setState={setSwitch1} />
      <Switch state={switch2} setState={setSwitch2} />
      <Switch state={switch3} setState={setSwitch3} />
      {!switch1 || !switch2 || !switch3 ? <p>NO WAY</p> : <p>GO</p>}
      <button
        onClick={() => {
          setSwitch1(false);
          setSwitch2(false);
          setSwitch3(false);
        }}
      >
        Turn All OFF
      </button>
    </div>
  );
}

export default App;
