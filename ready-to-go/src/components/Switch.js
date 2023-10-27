const Switch = (props) => {
  return (
    <div>
      <button
        className={props.state ? "active" : "inactive"}
        onClick={() => {
          props.setState(true);
        }}
      >
        ON
      </button>
      <button
        className={props.state ? "inactive" : "active"}
        onClick={() => {
          props.setState(false);
        }}
      >
        OFF
      </button>
    </div>
  );
};

export default Switch;
