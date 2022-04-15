import React from "react";
import "./App.css";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <div className="App">
      <PublicRoute />
      <PrivateRoute />
    </div>
  );
}

export default App;
