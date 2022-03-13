import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/AuthPages/Login';
import Register from './components/AuthPages/Register';
import { LanguageProvider } from './context/language-context';

function App() {
    return (
        <div>
            <LanguageProvider>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/login'} />} />
                    <Route path={'/login'} exact element={<Login />} />
                    <Route path={'/register'} element={<Register />} />
                </Routes>
            </LanguageProvider>
        </div>
    );
}

export default App;
