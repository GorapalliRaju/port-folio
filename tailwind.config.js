const colors = require("tailwindcss/colors");

// Tailwind's default color palette includes colors that have been renamed, and if you spread over these, it will
// trigger warnings. This code extracts the non-getter properties from the object, so that we don't trigger warnings.

const entries = Object.entries(Object.getOwnPropertyDescriptors(colors)).filter(
  ([key, descriptor]) => {
    return typeof descriptor.get !== "function"; // Exclude getters
  }
);

const nonDeprecatedColors = Object.fromEntries(
  entries.map(([key, descriptor]) => [key, descriptor.value])
);

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Add paths to your project files
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Add additional paths if needed
    "./components/**/*.{js,ts,jsx,tsx,mdx}" // Add more as required
  ],
  theme: {
    extend: {
      colors: nonDeprecatedColors, // Use your non-deprecated color setup here
    },
  },
  plugins: [],
};
