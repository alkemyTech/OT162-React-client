import React from "react";
import "./App.css";
import UserForm from "./Components/Users/UsersForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/index";

import {
  GetNews,
  GetSingleNews,
  PostNews,
  PutNews,
  DeleteNews,
} from "./Services/newsApiService";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <>
      <div className="App">
        <PublicRoute />
        <PrivateRoute />
      </div>
    </>
  );
}

export default App;
