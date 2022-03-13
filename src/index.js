import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import NotFound from './components/Error/NotFound';

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Suspense fallback={<NotFound/>}>
                <App />
            </Suspense>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);
