/**
 * Calculates the the color relative luminance based on W3C color specification.
 * @see https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
 * @param color: Color hex code
 * @returns number representing color luminance
 */
export const getRelativeLuminance = (color: string) => {
  const hexRegex = /^#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i;
  if (!hexRegex.test(color)) {
    throw new Error("Invalid hex color provided")
  }
  const match = color.match(hexRegex);
  var r = parseInt(match![1], 16); 
  var g = parseInt(match![2], 16); 
  var b = parseInt(match![3], 16);
  var sRGB = [r / 255, g / 255, b / 255];
  var linearColors = sRGB.map((col) => col <= 0.03928 ? col / 12.92 : Math.pow((col + 0.055) / 1.055, 2.4));
  return (0.2126 * linearColors[0]) + (0.7152 * linearColors[1]) + (0.0722 * linearColors[2]);
}