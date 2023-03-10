module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_900_79: "#34251f79",
        gray_900_65: "#34251f65",
        gray_900_87: "#34251f87",
        gray_800: "#403530",
        gray_900: "#34251f",
        gray_900_ab: "#34251fab",
        orange_300: "#ffb068",
        red_100: "#eeddcc",
        red_A700_6c: "#c209096c",
        white_A700_97: "#ffffff97",
        black_900: "#000000",
        gray_900_a2: "#34251fa2",
        red_100_6d: "#eeddcc6d",
        white_A700: "#ffffff",
        red_A700: "#c20909",
      },
      fontFamily: { frankruhllibre: "Frank Ruhl Libre", lato: "Lato" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
