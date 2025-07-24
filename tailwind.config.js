// tailwind.config.js
export default {
    theme: {
        extend: {
            screens: {
                'custom-lg': '1150px',
            },
        },
    },
    // jangan lupa pastikan ini
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
}
