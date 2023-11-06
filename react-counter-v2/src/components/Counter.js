const Counter = ({
  counter,
  index,
  handleClickPlus,
  handleClickMinus,
  handleReset,
}) => {
  return (
    <div>
      <button
        style={{ display: counter === 0 ? "none" : "block" }}
        onClick={() => {
          handleClickMinus(index);
        }}
      >
        -
      </button>
      <p>{counter}</p>
      <button
        onClick={() => {
          handleClickPlus(index);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          handleReset(index);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
