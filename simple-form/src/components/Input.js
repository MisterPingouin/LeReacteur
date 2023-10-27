function Input({ title, type, value, placeholder, setState, isError }) {
  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <>
      <p>{title}</p>
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        className={isError ? "error" : ""}
      />
    </>
  );
}

export default Input;
