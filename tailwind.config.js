const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            }, 
            spacing: {
                'fix-100': '100px',
            },
            gridTemplateColumns: {
                '15': 'repeat(15, minmax(0, 1fr))',
            },
            gridColumn: {
                'span-15': 'span 15 / span 15',
            }
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
            margin: ['hover'],
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
