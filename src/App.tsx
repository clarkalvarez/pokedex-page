import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main className="left-0 right-0 bg-white">
        {/* Temporary remove the checking of API status.
          {!!apiStatus?.apiReady && <Outlet />} */}
        <Outlet />
      </main>
    </div>
  );
}

export default App;
