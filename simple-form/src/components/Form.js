import Input from "./Input";

const Form = ({
  name,
  email,
  password,
  confirmPassword,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  setStep,
  isError,
}) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (confirmPassword === password) {
          setStep(0);
        } else {
          alert("Vos mots de passes ne sont pas identiques");
        }
      }}
    >
      <h1>Create Account</h1>
      <Input
        title="Name"
        type="text"
        value={name}
        placeholder="Name"
        setState={setName}
      />
      <Input
        title="Email"
        value={email}
        type="email"
        placeholder="jean@dupont.com"
        setState={setEmail}
      />
      <Input
        title="Password"
        type="password"
        value={password}
        placeholder="Password"
        setState={setPassword}
        isError={password !== confirmPassword && confirmPassword !== ""}
      />
      <Input
        title="Confirm Password"
        type="password"
        value={confirmPassword}
        placeholder="Confirm Password"
        setState={setConfirmPassword}
        isError={password !== confirmPassword && confirmPassword !== ""}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Form;
