import React from 'react';

import './Loading.css';

const Loading = () => {
    return (
        <React.Fragment>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </React.Fragment>
    );
};

export default Loading;
