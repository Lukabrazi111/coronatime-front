import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/AuthPages/Login';
import Register from './components/AuthPages/Register';
import { LanguageProvider } from './context/language-context';
import ForgotPassword from './components/AuthPages/ForgotPassword/ForgotPassword';
import NotFound from './components/Error/NotFound';
import Dashboard from './components/Dashboard/Dashboard';
import DashboardByCountry from './components/Dashboard/DashboardByCountry';
import ResetPassword from './components/AuthPages/ResetPassword/ResetPassword';

function App() {
    return (
        <div>
            <LanguageProvider>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/login'} />} />
                    <Route path={'/login'} exact element={<Login />} />
                    <Route path={'/register'} element={<Register />} />
                    <Route
                        path={'/forgot-password'}
                        element={<ForgotPassword />}
                    />
                    <Route
                        path={'/reset-password/:token'}
                        element={<ResetPassword />}
                    />
                    <Route path={'/dashboard'} element={<Dashboard />} />
                    <Route
                        path={'/dashboard-by-country'}
                        element={<DashboardByCountry />}
                    />
                    <Route path={'*'} element={<NotFound />} />
                </Routes>
            </LanguageProvider>
        </div>
    );
}

export default App;
