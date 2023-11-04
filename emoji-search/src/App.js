import "./App.css";
import emojis from "./emoji.json";
import { useState } from "react";

import Search from "./components/Search";
import Line from "./components/Line";

function App() {
  const [search, setSearch] = useState("");
  const tab = [];

  for (let i = 0; i < emojis.length; i++) {
    if (emojis[i].keywords.indexOf(search) !== -1) {
      if (tab.length < 20) {
        tab.push(
          <Line
            key={emojis[i].title}
            title={emojis[i].title}
            emoji={emojis[i].symbol}
          />
        );
      } else {
        break;
      }
    }
  }
  console.log(tab.length);
  return (
    <div className="App">
      <Search search={search} setSearch={setSearch} />
      {tab}
    </div>
  );
}

export default App;
