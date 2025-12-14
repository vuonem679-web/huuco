/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d',
                    800: '#166534',
                    900: '#14532d',
                },
                accent: {
                    50: '#fef3c7',
                    100: '#fde68a',
                    200: '#fcd34d',
                    300: '#fbbf24',
                    400: '#f59e0b',
                    500: '#d97706',
                },
                earth: {
                    50: '#faf5f0',
                    100: '#f5ebe0',
                    200: '#e8d5c4',
                    300: '#d4b5a0',
                    400: '#c09578',
                    500: '#a67c5c',
                }
            },
            fontFamily: {
                sans: ['Montserrat', 'system-ui', 'sans-serif'],
                display: ['Montserrat', 'sans-serif'],
            },
            boxShadow: {
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                'medium': '0 4px 20px -3px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.08)',
                'strong': '0 10px 40px -3px rgba(0, 0, 0, 0.15), 0 20px 50px -10px rgba(0, 0, 0, 0.12)',
                'glow': '0 0 20px rgba(34, 197, 94, 0.3)',
                'glow-lg': '0 0 30px rgba(34, 197, 94, 0.4)',
            },
            animation: {
                'fadeInUp': 'fadeInUp 0.5s ease-out',
                'scaleIn': 'scaleIn 0.3s ease-out',
                'float': 'float 3s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                glow: {
                    '0%, 100%': { boxShadow: '0 0 5px rgba(34, 197, 94, 0.5)' },
                    '50%': { boxShadow: '0 0 20px rgba(34, 197, 94, 0.8)' },
                },
            },
            backdropBlur: {
                xs: '2px',
            }
        }
    },
    plugins: []
}
