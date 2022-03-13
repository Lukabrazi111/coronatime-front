import React from 'react';
import notFound from '../../assets/img/404.png';

const NotFound = () => {
    return (
        <div>
            <img
                className="w-2/3 m-auto mt-24"
                src={notFound}
                alt={'notFound'}
            />
        </div>
    );
};

export default NotFound;
