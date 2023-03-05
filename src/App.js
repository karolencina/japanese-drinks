import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import About from './pages/About'
import Home from  './pages/Home'
import Choose from "./pages/Choose";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/choose" element={<Choose/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;