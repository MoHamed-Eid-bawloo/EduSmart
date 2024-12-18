// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "./node_modules/tw-elements-react/**/*.js",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#3b71ca",
//         danger: "#dc3545",
//       },
//     },
//   },
//   plugins: [],
// };



module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // يشمل كل ملفات المشروع
    "./node_modules/tw-elements-react/**/*.js", // تضمين مكتبة tw-elements-reactz
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#3b71ca",
        primary: {
          "50": "#eff6ff",
          "100": "#dbeafe",
          "200": "#bfdbfe",
          "300": "#93c5fd",
          "400": "#60a5fa",
          "500": "#3b82f6",
          "600": "#2563eb",
          "700": "#1d4ed8",
          "800": "#1e40af",
          "900": "#1e3a8a",
          "950": "#172554",
          "custom":"#3b71ca",
        },
        danger: "#dc3545", // لون إضافي للخطر
      },
      fontFamily: {
        body: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [
    // يمكنك إضافة بلجنز هنا إذا احتجت مثل Tailwind Forms أو Typography
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
