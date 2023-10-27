const ButtonAdd = (props) => {
  return (
    <button
      style={{ display: props.state === 10 ? "none" : "block" }}
      onClick={props.setState}
    >
      +
    </button>
  );
};

export default ButtonAdd;
