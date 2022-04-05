import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import api from 'utilities/axios';
import Notification from 'components/Notification';
import Loading from 'components/Loading';

const ForgotPasswordForm = () => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const [notification, setNotification] = useState({
        color: '',
        message: '',
    });

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            email: '',
        },
    });

    const submitHandler = async (data) => {
        try {
            setIsLoading(true);
            const response = await api.post('/forgot-password', data);
            const responseData = await response.data;

            if (responseData.message) {
                setNotification({
                    color: 'bg-green-600',
                    message: t(responseData.message),
                });
                const timer = setTimeout(() => {
                    setNotification({ color: '', message: '' });
                }, 4500);
                setIsLoading(false);
                return () => clearTimeout(timer);
            } else {
                setNotification({
                    color: 'bg-red-600',
                    message: t(responseData.error_message),
                });
                const timer = setTimeout(() => {
                    setNotification({ color: '', message: '' });
                }, 4500);
                setIsLoading(false);
                return () => clearTimeout(timer);
            }
        } catch (error) {
            setIsLoading(false);
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
                onSubmit={handleSubmit(submitHandler)}
                method='post'
                className='flex flex-col mt-4 w-full max-w-lg'
            >
                <label htmlFor='email' className='mb-2 text-left font-semibold'>
                    {t('Email')}
                </label>
                <input
                    {...register('email', {
                        required: t('The email must be a valid email address.'),
                    })}
                    className='px-4 py-4 rounded-lg border border-gray-200 mb-2 placeholder-dark'
                    type='email'
                    name='email'
                    id='email'
                    placeholder={t('Enter your email')}
                />

                {errors.email && (
                    <span className='text-sm text-red-600 flex'>
                        <img
                            className='mr-1 w-5 h-5'
                            src={require('assets/img/validation/error-warning-fill.png')}
                            alt='error'
                        />
                        {errors.email?.message}
                    </span>
                )}

                {isLoading && <Loading />}

                <div>
                    <button
                        type='submit'
                        className='py-4 transition duration-150 ease-in text-white font-semibold
                 uppercase hover:bg-hover-success bg-success my-5 w-full rounded-md'
                    >
                        {t('Reset Password')}
                    </button>
                </div>
            </form>
        </React.Fragment>
    );
};

export default ForgotPasswordForm;
