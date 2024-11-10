import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header.jsx";
import SearchBar from "./components/Searchbar.jsx";
import EmployeeList from "./components/EmployeeList.jsx";
import EmployeeListItems from "./components/EmployeeListItems.jsx";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <EmployeeList />
    </>
  );
}

export default App;
