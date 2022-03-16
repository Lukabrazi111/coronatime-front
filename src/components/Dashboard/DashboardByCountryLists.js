import React from 'react';
import { useTranslation } from 'react-i18next';

const DashboardByCountryLists = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div className="mb-8">
                <div className="relative w-full max-w-xss">
                    <div>
                        <img
                            className="absolute top-2/4 left-5 transform -translate-y-1/2 text-center"
                            src={require('../../assets/img/search.png')}
                            alt="search"
                        />
                    </div>
                    <div className="ml-3 md:m-0">
                        <input
                            type="search"
                            id="search"
                            className="md:w-72 pl-14 rounded-lg outline-none focus:outline-none border border-gray-200 py-3"
                            placeholder={t('Search by country')}
                        />
                    </div>
                </div>
            </div>

            {/*overflow hidden*/}
            <div className="overflow-hidden relative h-max">
                <table className="divide-y divide-gray-200 w-full text-left">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="md:w-64 md:p-5 py-5 text-xs text-black md:rounded-tl-lg">
                                <div className="flex inline-block gap-2">
                                    {t('Location')}
                                    <div className="flex inline-flex flex-col items-center">
                                        <button>
                                            <img
                                                className="mb-1"
                                                src={require('../../assets/img/arrow-up.png')}
                                                alt="arrowUp"
                                            />
                                        </button>
                                        <button>
                                            <img
                                                className="text-black"
                                                src={require('../../assets/img/black-arrow.png')}
                                                alt="blackArrow"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </th>
                            <th className="md:w-64 text-xs text-black">
                                <div className="md:flex inline-block md:gap-2 break-all">
                                    {t('New cases')}
                                    <div className="md:flex inline-flex flex-col items-center">
                                        <button>
                                            <img
                                                className="mb-1"
                                                src={require('../../assets/img/arrow-up.png')}
                                                alt="arrowUp"
                                            />
                                        </button>
                                        <button>
                                            <img
                                                className="text-black"
                                                src={require('../../assets/img/black-arrow.png')}
                                                alt="blackArrow"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </th>
                            <th className="md:w-64 text-xs text-black">
                                <div className="md:flex inline-block md:gap-2 break-all">
                                    {t('Deaths')}
                                    <div className="md:flex inline-flex flex-col items-center">
                                        <button>
                                            <img
                                                className="mb-1"
                                                src={require('../../assets/img/arrow-up.png')}
                                                alt="arrowUp"
                                            />
                                        </button>
                                        <button>
                                            <img
                                                className="text-black"
                                                src={require('../../assets/img/black-arrow.png')}
                                                alt="blackArrow"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </th>
                            <th className="md:w-64 text-xs text-black">
                                <div className="md:flex inline-block md:gap-2 break-all">
                                    {t('Recovered')}
                                    <div className="md:flex inline-flex flex-col items-center">
                                        <button>
                                            <img
                                                className="mb-1"
                                                src={require('../../assets/img/arrow-up.png')}
                                                alt="arrowUp"
                                            />
                                        </button>
                                        <button>
                                            <img
                                                className="text-black"
                                                src={require('../../assets/img/black-arrow.png')}
                                                alt="blackArrow"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </th>
                            <th className="md:w-32 py-2 text-xs text-black"></th>
                            <th className="md:w-32 py-2 text-xs text-black md:rounded-tr-lg"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr className="whitespace-nowrap">
                            <td className="md:p-5 text-sm pl-2 text-black">
                                country name
                            </td>
                            <td>
                                <div className="text-sm text-black">
                                    country confirmed
                                </div>
                            </td>
                            <td className="">
                                <div className="text-sm text-black">
                                    country deaths
                                </div>
                            </td>
                            <td className="py-4 text-sm text-black">
                                country recovered
                            </td>
                            <td className="py-4"></td>
                            <td className="py-4"></td>
                        </tr>
                        {/*<div className="absolute top-16 left-2">Nothing found for this query {{$search}}...</div>*/}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardByCountryLists;
