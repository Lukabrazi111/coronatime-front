import React from 'react';
import DashboardHeader from './DashboardHeader';

const Dashboard = () => {
    return (
        <DashboardHeader>
            <div className="container mx-auto">
                <section className="section__content pt-12 px-4 pb-12">
                    <div className="mb-8">
                        <h1 className="text-black text-2xl font-semibold">
                            Worldwide Statistics
                        </h1>
                    </div>
                    <div className="mb-12">
                        <nav className="navbar">
                            <ul className="md:flex md:items-center md:space-x-14 space-y-2 md:space-y-0 md:border-b-2 md:pb-3">
                                <li>
                                    <a
                                        href="/dashboard"
                                        className="md:pb-4 pb-1 border-b-2 border-b-black text-lg font-semibold md:border-b-black md:border-b-4"
                                    >
                                        Worldwide
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/dashboard-by-country"
                                        className="text-lg md:pb-4"
                                    >
                                        By country
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                            <div className="bg-brand-primary bg-opacity-7 rounded-xl md:col-span-1 col-span-full">
                                <div className="px-10 py-12 flex flex-col justify-center items-center space-y-6">
                                    <div className="mb-4">
                                        <img
                                            src={require('../../assets/img/vectors/Blue vector.png')}
                                            alt="blueVector"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-black text-xl">
                                            New cases
                                        </h3>
                                    </div>

                                    <div>
                                        <h1 className="text-brand-primary font-black text-4xl">
                                            confirmed
                                        </h1>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-brand-secondary bg-opacity-7 rounded-xl">
                                <div className="px-10 py-12 flex flex-col justify-center items-center space-y-6">
                                    <div className="mb-6 mt-4">
                                        <img
                                            src={require('../../assets/img/vectors/Green vector.png')}
                                            alt="greenVector"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-black text-xl">
                                            Recovered
                                        </h3>
                                    </div>

                                    <div>
                                        <h1 className="text-brand-secondary font-black text-4xl">
                                            recovered
                                        </h1>
                                    </div>
                                </div>
                            </div>

                            <div className=" bg-brand-tertiary bg-opacity-7 rounded-xl">
                                <div className="px-10 py-12 flex flex-col justify-center items-center space-y-6">
                                    <div className="mb-4 mt-3">
                                        <img
                                            src={require('../../assets/img/vectors/Yellow vector.png')}
                                            alt="yellowVector"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-black text-xl">
                                            Deaths
                                        </h3>
                                    </div>

                                    <div>
                                        <h1 className="text-brand-tertiary font-black text-4xl">
                                            deaths
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </DashboardHeader>
    );
};

export default Dashboard;
