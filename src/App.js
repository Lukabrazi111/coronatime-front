import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { LanguageProvider } from 'context/language-context';
import ForgotPassword from 'pages/ForgotPassword/ForgotPassword';
import NotFound from 'components/NotFound';
import Dashboard from 'pages/Dashboard';
import DashboardByCountry from 'pages/Dashboard/components/DashboardByCountry';
import ResetPassword from 'pages/ResetPassword/ResetPassword';
import AccountConfirmed from 'components/AccountConfirmed';
import PasswordChanged from 'components/PasswordChanged';
import AuthContext from 'context/auth-context';

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
