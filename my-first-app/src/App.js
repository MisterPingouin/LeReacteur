import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jobs from "./components/Jobs";

function App() {
  return (
    <>
      <Header name={"The Job Board"} />
      <Jobs />
      <Footer />
    </>
  );
}
export default App;
