import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import About from './pages/About'
import Home from  './pages/Home'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;