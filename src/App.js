import React from "react";
import "./App.css";

import PrivateRoute from "./routes/PrivateRoute";
import PublicLayout from "./routes/PublicLayout";

function App() {
  return (
    <div className="App">
      <PublicLayout />
      <PrivateRoute />
    </div>
  );
}

export default App;
