module.exports = {
    theme: {
        extend: {
            colors: {
                'primary-orange': '#FFA500',
                'orange-hover': '#FF8C00',
                'secondary-gray': '#808080',
                'dark-gray': '#333333',
                'light-gray': '#D3D3D3',
            },
            backdropFilter: {
                'blur': 'blur(10px)',
            },
        },
    },
    plugins: [
        require('tailwindcss-filters'),
        require('@tailwindcss/aspect-ratio'),
    ],
};