import React from 'react';
import Layout from 'components/Layout';
import ResetPasswordForm from './ResetPasswordForm';
import { useTranslation } from 'react-i18next';

const ResetPassword = () => {
    const { t } = useTranslation();

    return (
        <Layout>
            <main className="flex justify-center w-full max-h-screen font-intern">
                <div className="flex flex-col py-10 px-4 w-full">
                    <div className="mb-12 min-w-full flex flex-col justify-center items-center text-center">
                        <div className="mb-32">
                            <img
                                src={require('../../../assets/img/Group 1.png')}
                                alt="coronaImg"
                            />
                        </div>

                        <div className="mb-8">
                            <h1 className="font-semibold text-black text-2xl">
                                {t('Reset Password')}
                            </h1>
                        </div>

                        <ResetPasswordForm />
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default ResetPassword;
