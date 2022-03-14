import React from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardByCountryLists from './DashboardByCountryLists';

const DashboardByCountry = () => {
    return (
        <DashboardHeader>
            <div className="container mx-auto">
                <section className="section__content pt-12 md:px-4 pb-10">
                    <div className="px-4 md:px-0">
                        <div className="mb-8">
                            <h1 className="text-black text-2xl font-semibold">
                                Statistics by country
                            </h1>
                        </div>

                        <div className="mb-12">
                            <nav className="navbar">
                                <ul className="md:flex md:items-center md:space-x-14 space-y-2 md:space-y-0 md:border-b-2 md:pb-3">
                                    <li>
                                        <a
                                            href="/dashboard"
                                            className="pb-4 text-lg"
                                        >
                                            Worldwide
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/dashboard-by-country"
                                            className="md:pb-4 pb-1 border-b-2 border-b-black text-lg font-semibold md:border-b-black md:border-b-4"
                                        >
                                            By country
                                        </a>
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
