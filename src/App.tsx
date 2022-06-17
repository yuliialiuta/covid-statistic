import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Table from "./components/CountriesTable/CountriesTable";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Table />
    </div>
  );
};

export default App;
