import "./styles/App.css";

import * as React from "react";

import NavBar from "./components/NavBar";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

function App() {
  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
