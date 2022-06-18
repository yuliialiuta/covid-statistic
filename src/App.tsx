import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CountriesTable from "./components/CountriesTable/CountriesTable";

const App: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Header onChange={setSearch} search={search} />
      <CountriesTable filter={search} />
    </div>
  );
};

export default App;
