import React from "react";
import "./App.css";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PublicRoute />
        <PrivateRoute />
      </div>
    </BrowserRouter>
  );
}

export default App;
