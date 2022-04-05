import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from 'components/Layout';
import { useTranslation } from 'react-i18next';
import api from 'utilities/axios';

const AccountConfirmed = () => {
    const { t } = useTranslation();

    const { token } = useParams();

    useEffect(() => {
        const confirmAccount = async () => {
            await api.get(`/verify-user/${token}`);
        };

        confirmAccount();
    }, [token]);

    return (
        <Layout>
            <main className='flex justify-center w-full max-h-screen font-intern'>
                <div className='flex flex-col py-10 px-4 w-full'>
                    <div className='mb-12 min-w-full flex flex-col justify-center items-center text-center'>
                        <div className='mb-64'>
                            <img
                                src={require('assets/img/Group 1.png')}
                                alt='coronaImg'
                            />
                        </div>

                        <div className='mb-5'>
                            <img
                                src={require('assets/img/icons8-checked 1.png')}
                                alt='iconChecked'
                            />
                        </div>

                        <div className='mb-14'>
                            <p>
                                {t(
                                    'Your account is confirmed, you can sign in'
                                )}
                            </p>
                        </div>

                        <div className='flex flex-col mt-4 w-full max-w-lg'>
                            <Link
                                to='/login'
                                className='py-4 cursor-pointer transition duration-150 ease-in text-white font-semibold
                                 uppercase hover:bg-hover-success bg-success my-5 w-full rounded-md'
                            >
                                {t('Sign In')}
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default AccountConfirmed;
