import React from 'react';
import DashboardHeader from 'pages/Dashboard/components/DashboardHeader';
import DashboardByCountryLists from 'pages/Dashboard/components/DashboardByCountryLists';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DashboardByCountry = () => {
    const { t } = useTranslation();

    return (
        <DashboardHeader>
            <div className='container mx-auto'>
                <section className='section__content pt-12 md:px-4 pb-10'>
                    <div className='px-4 md:px-0'>
                        <div className='mb-8'>
                            <h1 className='text-black text-2xl font-semibold'>
                                {t('Statistics by country')}
                            </h1>
                        </div>

                        <div className='mb-12'>
                            <nav className='navbar'>
                                <ul className='md:flex md:items-center md:space-x-14 space-y-2 md:space-y-0 md:border-b-2 md:pb-3'>
                                    <li>
                                        <Link
                                            to='/dashboard'
                                            className='pb-4 text-lg'
                                        >
                                            {t('Worldwide')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/dashboard-by-country'
                                            className='md:pb-4 pb-1 border-b-2 border-b-black text-lg font-semibold md:border-b-black md:border-b-4'
                                        >
                                            {t('By country')}
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <DashboardByCountryLists />
                </section>
            </div>
        </DashboardHeader>
    );
};

export default DashboardByCountry;
