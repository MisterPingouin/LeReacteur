import "./App.css";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
// library.add(faPlane);

function App() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="App">
      {step === 1 ? (
        <Form
          name={name}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          setStep={setStep}
        />
      ) : (
        <StepTwo
          name={name}
          email={email}
          password={password}
          setStep={setStep}
        />
      )}
    </div>
  );
}

export default App;
