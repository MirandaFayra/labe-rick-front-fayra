import { BrowserRouter, Route, Routers } from "react-router-dom";

import React from 'react';
import LoginPage from "../pages/login-page";

export default function Router() {
    return (
        <BrowserRouter>
            <Routers>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/home" element={<LoginPage/>} />
                <Route path="/instruction" element={<LoginPage/>} />
                <Route path="/character" element={<LoginPage/>} />
                <Route path="/create-character" element={<LoginPage/>} />
                <Route path="/" element={<LoginPage/>} />
            </Routers>
        </BrowserRouter>
    );
}