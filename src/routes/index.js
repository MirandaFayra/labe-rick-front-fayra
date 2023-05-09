import { BrowserRouter, Route,  Routes } from "react-router-dom";
import React from 'react';
import LoginPage from "../pages/login-page";
import HomePage from "../pages/home-page";
import InstructionPage from "../pages/instruction-page";
import CharacterPage from "../pages/character-page";
import CreateCharacterPage from "../pages/create-character-page";
import PlanetPage from "../pages/planet-page";
import Header from "../components/Header";
import ConfirmationPage from "../pages/confirmation-page";


function Router(){
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/home" element={<HomePage/>} />
                <Route path="/instruction" element={<InstructionPage/>} />
                <Route path="/character" element={<CharacterPage/>} />
                <Route path="/create-character" element={<CreateCharacterPage/>} />
                <Route path="/planet" element={<PlanetPage/>} />
                <Route path="/confirmation" element={<ConfirmationPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router