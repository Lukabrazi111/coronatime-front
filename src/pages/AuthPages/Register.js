import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from 'components/Layout';
import RegisterForm from './components/RegisterForm';

const Register = () => {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Layout>
                <main className='flex justify-between w-full max-h-screen font-intern'>
                    <div className='flex flex-col pt-10 px-4 w-full md:pl-32 md:w-7/12'>
                        <div className='mb-12'>
                            <img
                                src={require('assets/img/Group 1.png')}
                                alt='coronaImg'
                            />
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold mb-2'>
                                {t('Welcome to Coronatime')}
                            </h1>
                            <h2 className='text-xl font-normal text-dark'>
                                {t('Please enter required info to sign up')}
                            </h2>
                        </div>

                        <RegisterForm />
                    </div>

                    <div>
                        <img
                            className='h-screen hidden md:flex'
                            src={require('assets/img/Rectangle 1.png')}
                            alt='capsuleImg'
                        />
                    </div>
                </main>
            </Layout>
        </React.Fragment>
    );
};

export default Register;
