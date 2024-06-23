import React from "react";
import { RouterProvider } from "react-router-dom";
import Aside from "./sections/Aside/Aside";
import HeaderComponent from "./sections/Header/Header";

import router from "./routes/Routes";
import "./App.css";
import { StudentProvider } from "./contexts/StudentContext";
import AsideProfile from "./components/asideProfile/AsideProfile";


function App() {
  return (
    <>

      <div className="container-fluid principal">
        <HeaderComponent />
        <AsideProfile/>
        <div className="container-fluid d-flex flex-row">
          <Aside />
          <StudentProvider>
            <div className="container-fluid">
              <RouterProvider router={router} />
            </div>
          </StudentProvider>
        </div>
      </div>
    </>
  );

}

export default App;
