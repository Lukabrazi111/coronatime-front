import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/AuthPages/Login';
import Register from './components/AuthPages/Register';
import { LanguageProvider } from 'context/language-context';
import ForgotPassword from './components/AuthPages/ForgotPassword/ForgotPassword';
import NotFound from './components/Error/NotFound';
import Dashboard from './components/Dashboard/Dashboard';
import DashboardByCountry from './components/Dashboard/DashboardByCountry';
import ResetPassword from './components/AuthPages/ResetPassword/ResetPassword';
import AccountConfirmed from './UI/AccountConfirmed';
import PasswordChanged from './UI/PasswordChanged';
import AuthContext from './context/auth-context';

function App() {
    const authCtx = useContext(AuthContext);

    return (
        <div>
            <LanguageProvider>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/login'} />} />
                    {!authCtx.isLoggedIn && (
                        <Route path={'/login'} exact element={<Login />} />
                    )}
                    {!authCtx.isLoggedIn && (
                        <Route path={'/register'} element={<Register />} />
                    )}
                    {!authCtx.isLoggedIn && (
                        <Route
                            path={'/forgot-password'}
                            element={<ForgotPassword />}
                        />
                    )}
                    {!authCtx.isLoggedIn && (
                        <Route
                            path={'/reset-password/:token'}
                            element={<ResetPassword />}
                        />
                    )}
                    {authCtx.isLoggedIn && (
                        <Route path={'/dashboard'} element={<Dashboard />} />
                    )}
                    {authCtx.isLoggedIn && (
                        <Route
                            path={'/dashboard-by-country'}
                            element={<DashboardByCountry />}
                        />
                    )}
                    {!authCtx.isLoggedIn && (
                        <Route
                            path={'/user/verify/:token'}
                            element={<AccountConfirmed />}
                        />
                    )}
                    {!authCtx.isLoggedIn && (
                        <Route
                            path={'/password-changed'}
                            element={<PasswordChanged />}
                        />
                    )}
                    <Route path={'*'} element={<NotFound />} />
                </Routes>
            </LanguageProvider>
        </div>
    );
}

export default App;
