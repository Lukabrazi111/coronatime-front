import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LanguageContext from 'context/language-context';
import AuthContext from 'context/auth-context';
import { useTranslation } from 'react-i18next';
import LogoutModal from 'UI/LogoutModal';

const DashboardHeader = (props) => {
    const { t } = useTranslation();
    const langCtx = useContext(LanguageContext);
    const [isOpen, setIsOpen] = useState(false);
    const [logoutModal, setLogoutModal] = useState(false);
    const authCtx = useContext(AuthContext);

    useEffect(() => {
        /*
         * close language
         * menu on click
         * */
        let handler = (event) => {
            if (event.target.classList.contains('lang')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handler);

        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);

    const logoutModalHandler = () => {
        setLogoutModal(true);
    };

    const closeLogoutModalHandler = () => {
        setLogoutModal(false);
    }

    return (
        <React.Fragment>
            {logoutModal && (
                <LogoutModal onClose={closeLogoutModalHandler}>
                    <div>
                        <p className="text-white text-2xl font-bold text-center mb-10">
                            Are you fkin sure you wanna go out?
                        </p>
                        <div className="flex items-center justify-end space-x-3">
                            <button
                                onClick={() => {
                                    setLogoutModal(false);
                                }}
                                className="bg-red-500 px-4 py-2 rounded text-white items-center shadow-2xl"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    authCtx.logout();
                                    localStorage.removeItem('user');
                                    window.location.href = '/login';
                                }}
                                className="bg-green-500 px-4 py-2 rounded text-white items-center shadow-2xl"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </LogoutModal>
            )}
            <div className="container mx-auto">
                <header className="py-5 flex items-center justify-between px-4">
                    <div className="header__inner">
                        <Link to="/dashboard">
                            <img
                                src={require('../../assets/img/Group 1.png')}
                                alt="coronaImg"
                            />
                        </Link>
                    </div>
                    <div className="flex items-center space-x-8">
                        <div className="relative">
                            <ul>
                                <li>
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="flex items-center cursor-pointer"
                                    >
                                        {langCtx.lang === 'en'
                                            ? 'English'
                                            : 'Georgian'}
                                        <span>
                                            <img
                                                className="ml-2"
                                                src={require('../../assets/img/Stroke 165.png')}
                                                alt="arrowDown"
                                            />
                                        </span>
                                    </button>
                                    {isOpen && (
                                        <div className="shadow-md w-36 absolute left-0 top-9 rounded-lg bg-gray-200 bg-opacity-75 text-black">
                                            <ul>
                                                <li>
                                                    <Link
                                                        onClick={langCtx.en}
                                                        to="#"
                                                        className="lang text-left px-4 p-3 transition duration-150 ease-in hover:bg-gray-300 rounded w-full block"
                                                    >
                                                        English
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        onClick={langCtx.ka}
                                                        to="#"
                                                        className="lang text-left px-4 p-3 transition duration-150 ease-in hover:bg-gray-300 rounded w-full block"
                                                    >
                                                        ქართული
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            </ul>
                        </div>
                        <div className="hidden md:flex items-center space-x-4">
                            <p className="font-semibold">
                                {localStorage.getItem('user')}
                            </p>
                            <span className="border-r h-8 max-h-full"></span>
                        </div>
                        <div className="hidden md:block">
                            <button
                                onClick={logoutModalHandler}
                                className="text-black"
                            >
                                {t('Log Out')}
                            </button>
                        </div>

                        <div className="md:hidden block">
                            <a href="#" className="block p-3">
                                <img
                                    src={require('../../assets/img/vectors/Hamburger vector.png')}
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                </header>
            </div>
            <hr />
            {props.children}
        </React.Fragment>
    );
};

export default DashboardHeader;
