module.exports = {
    mode:'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Ubuntu']
        },
        extend: {
            boxShadow: {
                '100': '0px 0px 20px rgba(0, 0, 0, 0.05);'
            },
            colors: {
                'neutral-100': '#FDFDFD',
                'neutral-200': '#F6F6F6',
                'neutral-300': '#E7E7E7',
                'neutral-800': '#3B3B3B',
                'neutral-900': 'var(--primary-color)'
            },
            height: {
                '15': '3.75rem',
                'content': 'calc(100vh - 3.75rem)'
            },
            width: {
                '15': '3.75rem',
                '76': '19rem',
                'content': 'calc(100% - 19rem)'
            },
            padding: {
                '15': '3.75rem'
            },
            margin: {
                '-15': '-3.75rem'
            },
            inset: {
                '-15': '-3.75rem',
                '15': '3.75rem'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
