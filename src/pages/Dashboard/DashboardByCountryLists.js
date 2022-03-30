import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import api from 'utilities/axios-hook';
import LanguageContext from 'context/language-context';
import Loading from 'components/Loading';
import AuthContext from 'context/auth-context';

const DashboardByCountryLists = () => {
    const { t } = useTranslation();
    const langCtx = useContext(LanguageContext);
    const authCtx = useContext(AuthContext);
    const [order, setOrder] = useState('asc');
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [column, setColumn] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState('');

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

    useEffect(() => {
        setFilteredData(
            data.filter((value) => value.name.en.toLowerCase().includes(search))
        );
    }, [search, data]);

    const sortBy = (column) => {
        setColumn(column);

        if (order === 'asc') {
            setData([].concat(data).sort((a, b) => a[column] - b[column]));
            setOrder('desc');
        }
        if (order === 'desc') {
            setData([].concat(data).sort((a, b) => b[column] - a[column]));
            setOrder('asc');
        }
    };

    return (
        <div>
            <div className='mb-8'>
                <div className='relative w-full max-w-xss'>
                    <div>
                        <img
                            className='absolute top-2/4 left-5 transform -translate-y-1/2 text-center'
                            src={require('assets/img/search.png')}
                            alt='search'
                        />
                    </div>
                    <div className='ml-3 md:m-0'>
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            type='search'
                            id='search'
                            className='md:w-72 pl-14 rounded-lg outline-none focus:outline-none border border-gray-200 py-3'
                            placeholder={t('Search by country')}
                        />
                    </div>
                </div>
            </div>

            <div className='overflow-auto relative h-125'>
                {isLoading ? (
                    <Loading />
                ) : (
                    <table className='divide-y divide-gray-200 w-full text-left'>
                        <thead className='bg-gray-200'>
                            <tr>
                                <th className='md:w-64 md:p-5 py-5 text-xs text-black md:rounded-tl-lg'>
                                    <div className='flex gap-2'>
                                        {t('Location')}
                                    </div>
                                </th>
                                <th className='md:w-64 relative text-xs text-black'>
                                    <div
                                        onClick={() => sortBy('confirmed')}
                                        className='md:flex absolute top-5 inline-block md:gap-2 break-all'
                                    >
                                        {t('New cases')}
                                        <div className='md:flex inline-flex flex-col items-center'>
                                            {order === 'asc' &&
                                            column === 'confirmed' ? (
                                                <button>
                                                    <img
                                                        className={
                                                            'rotate-180 mb-1 w-2.5'
                                                        }
                                                        src={require('assets/img/black-arrow.png')}
                                                        alt='blackArrow'
                                                    />
                                                </button>
                                            ) : (
                                                <button>
                                                    <img
                                                        className='mb-1 w-2.5'
                                                        src={require('assets/img/arrow-up.png')}
                                                        alt='arrowUp'
                                                    />
                                                </button>
                                            )}

                                            {order === 'desc' &&
                                            column === 'confirmed' ? (
                                                <button>
                                                    <img
                                                        className='w-2.5'
                                                        src={require('assets/img/black-arrow.png')}
                                                        alt='blackArrow'
                                                    />
                                                </button>
                                            ) : (
                                                <button>
                                                    <img
                                                        className='mb-1 w-2.5 rotate-180'
                                                        src={require('assets/img/arrow-up.png')}
                                                        alt='arrowUp'
                                                    />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </th>
                                <th className='md:w-64 relative text-xs text-black'>
                                    <div
                                        onClick={() => sortBy('deaths')}
                                        className='md:flex absolute top-5 inline-block md:gap-2 break-all'
                                    >
                                        {t('Deaths')}
                                        <div className='md:flex inline-flex flex-col items-center'>
                                            {order === 'asc' &&
                                            column === 'deaths' ? (
                                                <button>
                                                    <img
                                                        className={
                                                            'rotate-180 mb-1 w-2.5'
                                                        }
                                                        src={require('assets/img/black-arrow.png')}
                                                        alt='blackArrow'
                                                    />
                                                </button>
                                            ) : (
                                                <button>
                                                    <img
                                                        className='mb-1 w-2.5'
                                                        src={require('assets/img/arrow-up.png')}
                                                        alt='arrowUp'
                                                    />
                                                </button>
                                            )}

                                            {order === 'desc' &&
                                            column === 'deaths' ? (
                                                <button>
                                                    <img
                                                        className='w-2.5'
                                                        src={require('assets/img/black-arrow.png')}
                                                        alt='blackArrow'
                                                    />
                                                </button>
                                            ) : (
                                                <button>
                                                    <img
                                                        className='mb-1 w-2.5 rotate-180'
                                                        src={require('assets/img/arrow-up.png')}
                                                        alt='arrowUp'
                                                    />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </th>
                                <th className='md:w-64 relative text-xs text-black'>
                                    <div
                                        onClick={() => sortBy('recovered')}
                                        className='md:flex absolute top-5 inline-block md:gap-2 break-all'
                                    >
                                        {t('Recovered')}
                                        <div className='md:flex inline-flex flex-col items-center'>
                                            {order === 'asc' &&
                                            column === 'recovered' ? (
                                                <button>
                                                    <img
                                                        className={
                                                            'rotate-180 mb-1 w-2.5'
                                                        }
                                                        src={require('assets/img/black-arrow.png')}
                                                        alt='blackArrow'
                                                    />
                                                </button>
                                            ) : (
                                                <button>
                                                    <img
                                                        className='mb-1 w-2.5'
                                                        src={require('assets/img/arrow-up.png')}
                                                        alt='arrowUp'
                                                    />
                                                </button>
                                            )}

                                            {order === 'desc' &&
                                            column === 'recovered' ? (
                                                <button>
                                                    <img
                                                        className='w-2.5'
                                                        src={require('assets/img/black-arrow.png')}
                                                        alt='blackArrow'
                                                    />
                                                </button>
                                            ) : (
                                                <button>
                                                    <img
                                                        className='mb-1 w-2.5 rotate-180'
                                                        src={require('assets/img/arrow-up.png')}
                                                        alt='arrowUp'
                                                    />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </th>
                                <th className='md:w-32 py-2 text-xs text-black'></th>
                                <th className='md:w-32 py-2 text-xs text-black md:rounded-tr-lg'></th>
                            </tr>
                        </thead>

                        <tbody className='bg-white divide-y divide-gray-200'>
                            {filteredData.map((item) => (
                                <tr key={item.id} className='whitespace-nowrap'>
                                    <td className='md:p-5 text-sm pl-2 text-black'>
                                        {item.name[langCtx.lang]}
                                    </td>
                                    <td>
                                        <div className='text-sm text-black'>
                                            {item.confirmed}
                                        </div>
                                    </td>
                                    <td className=''>
                                        <div className='text-sm text-black'>
                                            {item.deaths}
                                        </div>
                                    </td>
                                    <td className='py-4 text-sm text-black'>
                                        {item.recovered}
                                    </td>
                                    <td className='py-4'></td>
                                    <td className='py-4'></td>
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
