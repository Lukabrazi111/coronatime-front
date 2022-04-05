import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import api from 'utilities/axios';
import axios from 'axios';
import AuthContext from 'context/authContext';
import Loading from 'components/Loading';

const LoginForm = () => {
    const { t } = useTranslation();
    const [error, setError] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const authCtx = useContext(AuthContext);

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const submitFormHandler = async (data) => {
        try {
            setIsLoading(true);
            await axios.get(
                process.env.REACT_APP_URL_API + '/sanctum/csrf-cookie'
            );
            const response = await api.post('/login', data, {
                headers: {
                    Authorization: `Bearer ${authCtx.token}`,
                },
            });
            const responseData = await response.data;
            const user = response.data.username;

            if (responseData.loggedIn) {
                window.location.href = '/dashboard';
                localStorage.setItem('user', user);
                authCtx.login(responseData.access_token);
                setIsLoading(false);
            }

            setError(responseData);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            alert(error.message);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(submitFormHandler)}
            method='post'
            className='flex flex-col w-full mt-2 md:w-6/12'
        >
            <div className='flex flex-col relative'>
                <label htmlFor='username' className='mb-2'>
                    {t('Username')}
                </label>
                <input
                    {...register('username', {
                        required: t(
                            'The username must be at least 3 characters.'
                        ),
                        minLength: {
                            value: 3,
                            message: t(
                                'The username must be at least 3 characters.'
                            ),
                        },
                    })}
                    className={`px-4 py-4 rounded-lg border ${
                        errors.username && 'border-red-600'
                    } mb-1 placeholder-dark`}
                    required
                    type='text'
                    name='username'
                    placeholder={t('Enter unique username or email')}
                />
            </div>
            <span className='text-sm text-red-600 flex mb-2 mt-1'>
                {errors.username && (
                    <img
                        className='mr-1 w-5 h-5'
                        src={require('assets/img/validation/error-warning-fill.png')}
                        alt='error'
                    />
                )}
                {errors.username?.message}
            </span>

            <div className='flex flex-col relative'>
                <label htmlFor='password' className='mb-2'>
                    {t('Password')}
                </label>
                <input
                    {...register('password', {
                        required: t(
                            'The password must be at least 3 characters.'
                        ),
                        minLength: {
                            value: 3,
                            message: t(
                                'The password must be at least 3 characters.'
                            ),
                        },
                    })}
                    className={`px-4 py-4 rounded-lg border ${
                        errors.password ? 'border-red-600' : 'border-gray-200'
                    } mb-1 placeholder-dark`}
                    required
                    type='password'
                    name='password'
                    id='password'
                    placeholder={t('Fill in password')}
                />
                <p className='text-red-600'>{t(error.error_message)}</p>
                <span className='text-sm text-red-600 flex mb-2 mt-1'>
                    {errors.password && (
                        <img
                            className='mr-1 w-5 h-5'
                            src={require('assets/img/validation/error-warning-fill.png')}
                            alt='error'
                        />
                    )}
                    {errors.password?.message}
                </span>
            </div>

            {isLoading ? (
                <Loading />
            ) : (
                <div className='flex justify-between items-center mt-2'>
                    <div className='flex items-center gap-1'>
                        <input
                            type='checkbox'
                            id='remember'
                            name='remember'
                            className='border border-gray-200 text-success transition duration-100 ease-in rounded-4 form-checkbox'
                        />
                        <label className='ml-1' htmlFor='remember'>
                            {t('Remember this device')}
                        </label>
                    </div>
                    <div>
                        <Link
                            className='hover:underline text-link'
                            to='/forgot-password'
                        >
                            {t('Forgot password?')}
                        </Link>
                    </div>
                </div>
            )}

            <div>
                <button
                    type='submit'
                    className='py-4 transition duration-150 ease-in text-white font-semibold
             uppercase hover:bg-hover-success bg-success my-5 w-full rounded-md'
                >
                    {t('Log In')}
                </button>
            </div>

            <div className='flex items-center justify-center space-x-2'>
                <p className='text-dark'>{t("Don't have an account?")}</p>
                <Link to='/register' className='font-semibold hover:underline'>
                    {t('Sign Up for free')}
                </Link>
            </div>
        </form>
    );
};

export default LoginForm;
