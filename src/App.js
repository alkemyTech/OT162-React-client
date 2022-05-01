import React from "react";
import "./App.css";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PublicRoute />
        <PrivateRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
