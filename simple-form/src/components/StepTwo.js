const StepTwo = ({ name, email, password, setStep }) => {
  return (
    <div>
      <h2>Results</h2>
      <p> Name : {name}</p>
      <p> email : {email} </p>
      <p> Password : {password}</p>
      <button
        onClick={() => {
          setStep(1);
        }}
      >
        Edit your information
      </button>
    </div>
  );
};

export default StepTwo;
