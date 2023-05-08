import { BrowserRouter, Route,  Routes } from "react-router-dom";

import React from 'react';
import LoginPage from "../pages/login-page";

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/home" element={<LoginPage/>} />
                <Route path="/instruction" element={<LoginPage/>} />
                <Route path="/character" element={<LoginPage/>} />
                <Route path="/create-character" element={<LoginPage/>} />
                <Route path="/" element={<LoginPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router