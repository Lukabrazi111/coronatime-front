import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import api from '../../../utilities/axios-hook';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Notification from '../../../UI/Notification';

const ResetPasswordForm = () => {
    const { t } = useTranslation();
    const { token } = useParams();
    const [notification, setNotification] = useState({
        color: '',
        message: '',
    });
    const redirect = useNavigate();

    const queryParams = new URLSearchParams(window.location.search);
    const emailParam = queryParams.get('email');

    const {
        handleSubmit,
        register,
        watch,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            password: '',
            repeat_password: '',
        },
    });

    const password = useRef({});
    password.current = watch('password', '');

    const submitFormHandler = async (data) => {
        const formData = new FormData();

        formData.append('password', data.password);
        formData.append('token', token);
        formData.append('repeat_password', data.repeat_password);
        formData.append('email', emailParam);

        try {
            const response = await api.post('/reset-password', formData);
            const responseData = await response.data;
            if (responseData.error_message) {
                setNotification({
                    color: 'bg-red-600',
                    message: responseData.error_message,
                });
                const timer = setTimeout(() => {
                    setNotification({ color: '', message: '' });
                }, 3400);
                return () => clearTimeout(timer);
            }
            redirect('/login');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <React.Fragment>
            {notification.message && (
                <Notification
                    color={notification.color}
                    message={notification.message}
                />
            )}
            <form
                onSubmit={handleSubmit(submitFormHandler)}
                method="post"
                className="flex flex-col mt-4 w-full max-w-lg"
            >
                <label
                    htmlFor="password"
                    className="mb-2 text-left font-semibold"
                >
                    {t('New password')}
                </label>
                <input
                    {...register('password', {
                        required: t('Password field is required'),
                        minLength: {
                            value: 3,
                            message: t(
                                'The password must be at least 3 characters.'
                            ),
                        },
                    })}
                    required
                    className={`px-4 py-4 rounded-lg border ${
                        errors.password && 'border-red-600'
                    } mb-2 placeholder-dark`}
                    type="password"
                    name="password"
                    id="password"
                    placeholder={t('Enter new password')}
                />
                {errors.password && (
                    <span className="text-sm text-red-600 flex mb-2 mt-1">
                        <img
                            className="mr-1 w-5 h-5"
                            src={require('../../../assets/img/validation/error-warning-fill.png')}
                            alt="error"
                        />
                        {errors.password?.message}
                    </span>
                )}

                <label
                    htmlFor="password_confirmation"
                    className="mb-2 text-left font-semibold"
                >
                    {t('Repeat password')}
                </label>
                <input
                    {...register('repeat_password', {
                        validate: (value) => {
                            return (
                                value === password.current ||
                                t(
                                    'The password confirmation and password must match.'
                                )
                            );
                        },
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
                    id="repeat_password"
                    className={`px-4 py-4 rounded-lg border ${
                        errors.repeat_password && 'border-red-600'
                    } mb-1 placeholder-dark`}
                    required
                    type="password"
                    name="repeat_password"
                    placeholder={t('Repeat password')}
                />

                <span className="text-sm text-red-600 flex mb-2 mt-1">
                    {errors.repeat_password && (
                        <img
                            className="mr-1 w-5 h-5"
                            src={require('../../../assets/img/validation/error-warning-fill.png')}
                            alt="error"
                        />
                    )}
                    {errors.repeat_password?.message}
                </span>
                <div>
                    <button
                        type="submit"
                        className="py-4 transition duration-150 ease-in text-white font-semibold
                                 uppercase hover:bg-hover-success bg-success my-5 w-full rounded-md"
                    >
                        {t('Save Changes')}
                    </button>
                </div>
            </form>
        </React.Fragment>
    );
};

export default ResetPasswordForm;
