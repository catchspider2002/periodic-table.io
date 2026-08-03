// Visible emission-line spectra for the elements.
//
// Rendered as an inline SVG band that htmlElement.js bakes into each element
// page at build time — no runtime JS, works offline, and inherits the page
// theme (the band is black either way, like a real emission spectrum).
//
// DATA: `SPECTRA` maps atomic number -> array of the element's strongest
// emission-line wavelengths in nanometres, restricted to the visible range
// (~380-750 nm). Wavelength values are physical facts sourced from the NIST
// Atomic Spectra Database (ASD) / NIST Handbook of Basic Atomic Spectroscopic
// Data; NIST is credited on the page. Only a hand-verified PILOT set is filled
// in so far (the flame-test / discharge-lamp classics everyone can eyeball) —
// the remaining elements are added from NIST ASD. Elements with no entry
// simply render no spectrum, so partial coverage is safe.

const VISIBLE_MIN = 380; // nm
const VISIBLE_MAX = 750; // nm

// Approximate sRGB for a single visible wavelength (nm), based on Dan Bruton's
// widely-used piecewise approximation (intensity falls off near the ends of
// the visible band). Returns { r, g, b } in 0-255. Wavelengths outside the
// visible range return null (caller skips them).
function wavelengthToRgb(nm) {
  if (nm < VISIBLE_MIN || nm > VISIBLE_MAX) return null;
  let r = 0, g = 0, b = 0;
  if (nm < 440) {
    r = -(nm - 440) / (440 - 380);
    b = 1;
  } else if (nm < 490) {
    g = (nm - 440) / (490 - 440);
    b = 1;
  } else if (nm < 510) {
    g = 1;
    b = -(nm - 510) / (510 - 490);
  } else if (nm < 580) {
    r = (nm - 510) / (580 - 510);
    g = 1;
  } else if (nm < 645) {
    r = 1;
    g = -(nm - 645) / (645 - 580);
  } else {
    r = 1;
  }
  // Intensity falloff at the edges of human vision.
  let factor = 1;
  if (nm < 420) factor = 0.3 + (0.7 * (nm - 380)) / (420 - 380);
  else if (nm > 700) factor = 0.3 + (0.7 * (750 - nm)) / (750 - 700);
  const gamma = 0.8;
  const adjust = (c) => (c <= 0 ? 0 : Math.round(255 * Math.pow(c * factor, gamma)));
  return { r: adjust(r), g: adjust(g), b: adjust(b) };
}

// Fractional x-position (0..1) of a wavelength within the rendered band.
function wavelengthToFraction(nm) {
  return (nm - VISIBLE_MIN) / (VISIBLE_MAX - VISIBLE_MIN);
}

// Build an inline SVG emission spectrum for a list of wavelengths (nm).
// Black background with a bright vertical line at each emission wavelength,
// coloured by wavelengthToRgb. `width`/`height` are the SVG viewBox units.
// Returns "" when there are no in-range lines so callers can omit the section.
function renderSpectrum(wavelengths, opts) {
  opts = opts || {};
  const width = opts.width || 370;   // 1 unit ≈ 1 nm across 380-750
  const height = opts.height || 44;
  const lineWidth = opts.lineWidth || 1.4;

  const lines = (wavelengths || [])
    .map((nm) => ({ nm, rgb: wavelengthToRgb(nm) }))
    .filter((l) => l.rgb !== null);

  if (!lines.length) return "";

  let svg =
    `<svg class='emissionSpectrum' xmlns='http://www.w3.org/2000/svg' ` +
    `viewBox='0 0 ${width} ${height}' preserveAspectRatio='none' role='img'>` +
    `<rect x='0' y='0' width='${width}' height='${height}' fill='#000'/>`;

  for (const l of lines) {
    const x = +(wavelengthToFraction(l.nm) * width).toFixed(2);
    const color = `rgb(${l.rgb.r},${l.rgb.g},${l.rgb.b})`;
    svg +=
      `<rect x='${(x - lineWidth / 2).toFixed(2)}' y='0' ` +
      `width='${lineWidth}' height='${height}' fill='${color}'/>`;
  }
  svg += "</svg>";
  return svg;
}

// element atomic number -> strongest visible emission wavelengths (nm).
// Sourced from the NIST Handbook of Basic Atomic Spectroscopic Data (see
// spectra-data.js header). Covers 93/99 elements; the rest render no spectrum.
const SPECTRA = require("./spectra-data.js");

module.exports = {
  VISIBLE_MIN,
  VISIBLE_MAX,
  wavelengthToRgb,
  wavelengthToFraction,
  renderSpectrum,
  SPECTRA,
};
