import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = React.createContext({
    lang: localStorage.setItem('i18nextLng', 'en'),
    en: () => {},
    ka: () => {},
});

export const LanguageProvider = (props) => {
    const { i18n } = useTranslation();

    const changeToEnglish = () => {
        i18n.changeLanguage('en');
    };

    const changeToGeorgian = () => {
        i18n.changeLanguage('ka');
    };

    const langContext = {
        lang: localStorage.getItem('i18nextLng'),
        en: changeToEnglish,
        ka: changeToGeorgian,
    };

    return (
        <LanguageContext.Provider value={langContext}>
            {props.children}
        </LanguageContext.Provider>
    );
};

export default LanguageContext;
