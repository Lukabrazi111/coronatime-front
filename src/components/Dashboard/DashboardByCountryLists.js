import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import api from 'utilities/axios-hook';
import LanguageContext from 'context/language-context';
import Loading from 'UI/Loading';
import AuthContext from 'context/auth-context';

const DashboardByCountryLists = () => {
    const { t } = useTranslation();
    const langCtx = useContext(LanguageContext);
    const authCtx = useContext(AuthContext);
    const [order, setOrder] = useState('asc');
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState('');

    const sortBy = (column) => {
        if (order === 'asc') {
            setData([].concat(data).sort((a, b) => a[column] - b[column]));
            setOrder('desc');
        }
        if (order === 'desc') {
            setData([].concat(data).sort((a, b) => b[column] - a[column]));
            setOrder('asc');
        }
    };

    useEffect(() => {
        setIsLoading(true);
        const fetchDataHandler = async () => {
            try {
                const response = await api.get('/statistics', {
                    headers: {
                        Authorization: `Bearer ${authCtx.token}`,
                    },
                });
                const responseData = await response.data;
                setData(responseData);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                alert(error.message);
            }
        };
        fetchDataHandler();
    }, []);

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
                            onChange={(event) => setSearch(event.target.value)}
                            type="search"
                            id="search"
                            className="md:w-72 pl-14 rounded-lg outline-none focus:outline-none border border-gray-200 py-3"
                            placeholder={t('Search by country')}
                        />
                    </div>
                </div>
            </div>

            <div className="overflow-auto h-96 relative h-max">
                {isLoading ? (
                    <Loading />
                ) : (
                    <table className="divide-y divide-gray-200 w-full text-left">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="md:w-64 md:p-5 py-5 text-xs text-black md:rounded-tl-lg">
                                    <div className="flex inline-block gap-2">
                                        {t('Location')}
                                    </div>
                                </th>
                                <th className="md:w-64 text-xs text-black">
                                    <div className="md:flex inline-block md:gap-2 break-all">
                                        {t('New cases')}
                                        <div
                                            onClick={() => sortBy('confirmed')}
                                            className="md:flex inline-flex flex-col items-center"
                                        >
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
                                    <div
                                        onClick={() => sortBy('deaths')}
                                        className="md:flex inline-block md:gap-2 break-all"
                                    >
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
                                    <div
                                        onClick={() => sortBy('recovered')}
                                        className="md:flex inline-block md:gap-2 break-all"
                                    >
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
                            {data
                                .filter((value) => {
                                    if (search === '') {
                                        return value;
                                    }
                                    return value.name.en
                                        .toLowerCase()
                                        .includes(search);
                                })
                                .map((item) => (
                                    <tr
                                        key={item.id}
                                        className="whitespace-nowrap"
                                    >
                                        <td className="md:p-5 text-sm pl-2 text-black">
                                            {item.name[langCtx.lang]}
                                        </td>
                                        <td>
                                            <div className="text-sm text-black">
                                                {item.confirmed}
                                            </div>
                                        </td>
                                        <td className="">
                                            <div className="text-sm text-black">
                                                {item.deaths}
                                            </div>
                                        </td>
                                        <td className="py-4 text-sm text-black">
                                            {item.recovered}
                                        </td>
                                        <td className="py-4"></td>
                                        <td className="py-4"></td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default DashboardByCountryLists;
