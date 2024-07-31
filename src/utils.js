// fontUtils.js

// Define the font families
export const fontFamilies = {
  roboto: "'Roboto', sans-serif",
  poppins: "'Poppins', sans-serif",
  montserrat: "'Montserrat', sans-serif",
};

// Utility function to get the font family
export const getFontFamily = (fontName) => {
  return fontFamilies[fontName] || fontFamilies.roboto;
};
