import "./App.css";
import data from "./data.json";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <h1>Netflix</h1>
      {data.map((elem, index) => {
        return (
          <Section key={index} category={elem.category} images={elem.images} />
        );
      })}
    </div>
  );
}

export default App;
