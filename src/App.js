import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/AuthPages/Login';
import Register from './components/AuthPages/Register';
import { LanguageProvider } from './context/language-context';
import DashboardHeader from './components/Dashboard/DashboardHeader';
import ForgotPassword from './components/AuthPages/ForgotPassword/ForgotPassword';
import NotFound from './components/Error/NotFound';

function App() {
    return (
        <div>
            <LanguageProvider>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/login'} />} />
                    <Route path={'/login'} exact element={<Login />} />
                    <Route path={'/register'} element={<Register />} />
                    <Route path={'/dashboard'} element={<DashboardHeader />} />
                    <Route
                        path={'/forgot-password'}
                        element={<ForgotPassword />}
                    />
                    <Route path={'*'} element={<NotFound />} />
                </Routes>
            </LanguageProvider>
        </div>
    );
}

export default App;
