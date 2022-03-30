import React from 'react';

const Notification = (props) => {
    return (
        <React.Fragment>
            <div
                className={`${props.color} absolute bottom-12 left-12 py-3 px-5 rounded animate-bounce`}
            >
                <p className={'text-white text-center font-medium'}>
                    {props.message}
                </p>
            </div>
        </React.Fragment>
    );
};

export default Notification;
