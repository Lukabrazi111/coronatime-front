import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./components/AuthPages/Login";
import Register from "./components/AuthPages/Register";

function App() {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Navigate to={'/login'}/>}/>
                <Route path={'/login'} exact element={<Login/>}/>
                <Route path={'/register'} element={<Register/>}/>
            </Routes>
        </div>
    );
}

export default App;
