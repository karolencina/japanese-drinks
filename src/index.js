import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from './App.js'

const reactContentRoot = document.getElementById("root");

const Home = () => {
    return (
        <BrowserRouter>
            <App></App>
        </BrowserRouter>

    );
}

ReactDOM.render(<Home/>, reactContentRoot)