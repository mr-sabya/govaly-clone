import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#F53D61", // Govaly Red
                secondary: "#2D2D2D",
                accent: "#F8F8F8",
            },
            container: {
                center: true,
                padding: "1rem",
            },
        },
    },
    plugins: [],
};
export default config;