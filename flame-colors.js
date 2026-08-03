// Flame test colours, shared by the standalone chart (htmlRefTable) and the
// individual element pages (htmlElement). Each element's characteristic flame
// colour: a display order for the chart plus atomic-number lookup for element
// pages. `nme` matches the translation sheet's element-name key; `colorKey`
// is the translatable colour word (English fallback in `colorEn`); `hex` is
// the language-neutral swatch colour.

const FLAME_COLORS = [
  { num: 3, nme: "lithium", hex: "#DC143C", colorKey: "ftCrimson", colorEn: "Crimson red" },
  { num: 11, nme: "sodium", hex: "#FFC300", colorKey: "ftYellow", colorEn: "Intense yellow" },
  { num: 19, nme: "potassium", hex: "#B57EDC", colorKey: "ftLilac", colorEn: "Lilac (violet)" },
  { num: 37, nme: "rubidium", hex: "#C71585", colorKey: "ftRedViolet", colorEn: "Red-violet" },
  { num: 55, nme: "caesium", hex: "#7B68EE", colorKey: "ftBlueViolet", colorEn: "Blue-violet" },
  { num: 20, nme: "calcium", hex: "#FF4500", colorKey: "ftOrangeRed", colorEn: "Orange-red" },
  { num: 38, nme: "strontium", hex: "#E32636", colorKey: "ftScarlet", colorEn: "Crimson (scarlet)" },
  { num: 56, nme: "barium", hex: "#8DB600", colorKey: "ftPaleGreen", colorEn: "Pale green" },
  { num: 29, nme: "copper", hex: "#00A86B", colorKey: "ftBlueGreen", colorEn: "Blue-green" },
  { num: 5, nme: "boron", hex: "#66FF00", colorKey: "ftBrightGreen", colorEn: "Bright green" },
  { num: 82, nme: "lead", hex: "#A9B2C3", colorKey: "ftBluishWhite", colorEn: "Bluish white" },
  { num: 12, nme: "magnesium", hex: "#F5F5F5", colorKey: "ftBrilliantWhite", colorEn: "Brilliant white" },
];

const BY_NUM = {};
FLAME_COLORS.forEach((f) => { BY_NUM[f.num] = f; });

module.exports = { FLAME_COLORS, BY_NUM };
