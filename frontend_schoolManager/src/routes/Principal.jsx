import React from "react";
import Aside from "../sections/Aside/Aside"
import TableStudent from "../pages/Student/Student";
import HeaderComponent from "../sections/Header/Header";
import "./principal.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddStudent from "../pages/AddStudent/FormStudent";

function Main() {
    return (
        <>
            <div className="container-fluid principal">
                <HeaderComponent />
                
            <div className="container-fluid d-flex flex-row">
                <Aside />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<TableStudent />} />
                        <Route path="/añadirEstudiante" element={<AddStudent />} />
                    </Routes>
                 </BrowserRouter>
            </div>

            </div>
        </>
    )
}

export default Main