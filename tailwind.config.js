module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                dark: '#808189',
                'dark-black': '#010414',
                link: '#2029F3',
                success: '#0FBA68',
                'hover-success': '#0da75c',
                'brand-primary': '#2029F3',
                'brand-secondary': '#0FBA68',
                'brand-tertiary': '#EAD621',
                backdrop: 'rgba(0,0,0,0.40)',
            },
            spacing: {
                75: '24.5rem',
                125: '45rem',
            },
            maxWidth: {
                xss: '16rem',
            },
            opacity: {
                7: '0.08',
            },
            borderRadius: {
                4: '0.25rem',
            },
        },
    },
};
