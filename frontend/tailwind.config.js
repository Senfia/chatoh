/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "forest",
      {
        "chat-oh": {
          primary: "#24D692",

          secondary: "#5eead4",

          accent: "#00FFA2",

          neutral: "#86efac",

          "base-100": "#111827",

          info: "#2563eb",

          success: "#86efac",

          warning: "#fb7185",

          error: "#ef4444",
        },
      },
    ],
  },
};
