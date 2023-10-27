const ButtonRemonve = (props) => {
  return (
    <button
      style={{ display: props.state === 0 ? "none" : "block" }}
      onClick={props.setState}
    >
      -
    </button>
  );
};

export default ButtonRemonve;
