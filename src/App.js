import React from "react";
import { BrowserRouter } from "react-router-dom";
import Application from "./components/Application";
import UserProvider from "./providers/UserProvider";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Application />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
