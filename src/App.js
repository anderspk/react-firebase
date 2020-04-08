import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Application from "./components/Application";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Application />
      </div>
    </BrowserRouter>
  );
}

export default App;
