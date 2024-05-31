import React from "react";
import { RouterProvider } from "react-router-dom";
import Aside from "./sections/Aside/Aside";
import HeaderComponent from "./sections/Header/Header";

import router from "./routes/Routes";
import "./App.css";


function App() {
  return (
    <div className="container-fluid principal">
      <HeaderComponent />
      <div className="container-fluid d-flex flex-row">
        <Aside />
        <div className="container-fluid">
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  );
}

export default App;
