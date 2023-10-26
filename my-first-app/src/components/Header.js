import Title from "./Title";

const Header = (props) => {
  return (
    <header>
      <Title title={props.name} />
    </header>
  );
};

export default Header;
