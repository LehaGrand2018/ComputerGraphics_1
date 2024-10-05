const rRange = document.getElementById("r");
const gRange = document.getElementById("g");
const bRange = document.getElementById("b");
const rValue = document.getElementById("r-value");
const gValue = document.getElementById("g-value");
const bValue = document.getElementById("b-value");

const cRange = document.getElementById("c");
const mRange = document.getElementById("m");
const yRange = document.getElementById("y");
const kRange = document.getElementById("k");
const cValue = document.getElementById("c-value");
const mValue = document.getElementById("m-value");
const yValue = document.getElementById("y-value");
const kValue = document.getElementById("k-value");

const hRange = document.getElementById("h");
const lRange = document.getElementById("l");
const sRange = document.getElementById("s");
const hValue = document.getElementById("h-value");
const lValue = document.getElementById("l-value");
const sValue = document.getElementById("s-value");

const colorPreview = document.getElementById("color-preview");
const colorPicker = document.getElementById("color-picker");

const updateRGBFromRange = () => {
  const r = parseInt(rRange.value);
  const g = parseInt(gRange.value);
  const b = parseInt(bRange.value);
  rValue.value = r;
  gValue.value = g;
  bValue.value = b;
  setColorModels(chroma.rgb(r, g, b));
};

const updateRGBFromValue = () => {
  const r = parseInt(rValue.value);
  const g = parseInt(gValue.value);
  const b = parseInt(bValue.value);
  rRange.value = r;
  gRange.value = g;
  bRange.value = b;
  setColorModels(chroma.rgb(r, g, b));
};

const updateCMYKFromRange = () => {
  const c = parseInt(cRange.value) / 100;
  const m = parseInt(mRange.value) / 100;
  const y = parseInt(yRange.value) / 100;
  const k = parseInt(kRange.value) / 100;
  cValue.value = cRange.value;
  mValue.value = mRange.value;
  yValue.value = yRange.value;
  kValue.value = kRange.value;
  setColorModels(chroma.cmyk(c, m, y, k));
};

const updateCMYKFromValue = () => {
  const c = parseInt(cValue.value) / 100;
  const m = parseInt(mValue.value) / 100;
  const y = parseInt(yValue.value) / 100;
  const k = parseInt(kValue.value) / 100;
  cRange.value = c;
  mRange.value = m;
  yRange.value = y;
  kRange.value = k;
  setColorModels(chroma.cmyk(c, m, y, k));
};

const updateHLSFromRange = () => {
  const h = parseInt(hRange.value);
  const l = parseInt(lRange.value) / 100;
  const s = parseInt(sRange.value) / 100;
  hValue.value = hRange.value;
  lValue.value = lRange.value;
  sValue.value = sRange.value;
  setColorModels(chroma.hsl(h, s, l));
};

const updateHLSFromValue = () => {
  const h = parseInt(hValue.value);
  const l = parseInt(lValue.value) / 100;
  const s = parseInt(sValue.value) / 100;
  hRange.value = hValue.value;
  lRange.value = lValue.value;
  sRange.value = sValue.value;
  setColorModels(chroma.hsl(h, s, l));
};

const setColorModels = (color) => {
  console.log(color);
  const rgbColor = color.rgb();
  const cmykColor = color.cmyk();
  const hslColor = color.hsl();
  setRGB(rgbColor);
  setCMYK(cmykColor);
  setHSL(hslColor);
  colorPicker.value = chroma.rgb(rgbColor).hex();
};

const rgb = document.querySelectorAll(".rgb");
const rgbValue = document.querySelectorAll(".rgb-value");

const cmyk = document.querySelectorAll(".cmyk");
const cmykValue = document.querySelectorAll(".cmyk-value");

const hls = document.querySelectorAll(".hls");
const hlsValue = document.querySelectorAll(".hls-value");


const setRGB = (rgbColor) => {
  rRange.value = rgbColor[0];
  gRange.value = rgbColor[1];
  bRange.value = rgbColor[2];
  rValue.value = rgbColor[0];
  gValue.value = rgbColor[1];
  bValue.value = rgbColor[2];
};

const setCMYK = (cmykColor) => {
  cRange.value = cmykColor[0] * 100;
  mRange.value = cmykColor[1] * 100;
  yRange.value = cmykColor[2] * 100;
  kRange.value = cmykColor[3] * 100;
  cValue.value = cmykColor[0] * 100;
  mValue.value = cmykColor[1] * 100;
  yValue.value = cmykColor[2] * 100;
  kValue.value = cmykColor[3] * 100;
};

const setHSL = (hslColor) => {
  hRange.value = hslColor[0];
  sRange.value = hslColor[1] * 100;
  lRange.value = hslColor[2] * 100;
  hValue.value = hslColor[0];
  sValue.value = hslColor[1] * 100;
  lValue.value = hslColor[2] * 100;
};

const updateRGBFromPicker = () => {
  console.log(chroma(colorPicker.value));

  setColorModels(chroma(colorPicker.value));
};

colorPicker.addEventListener("input", updateRGBFromPicker);

let currentEvent = "input"

for (el of rgb) {
  el.addEventListener(currentEvent, updateRGBFromRange);
}

for (el of rgbValue) {
  el.addEventListener(currentEvent, updateRGBFromValue);
}

for (el of cmyk) {
  el.addEventListener(currentEvent, updateCMYKFromRange);
}

for (el of cmykValue) {
  el.addEventListener(currentEvent, updateCMYKFromValue);
}
for (el of hls) {
  el.addEventListener(currentEvent, updateHLSFromRange);
}

for (el of hlsValue) {
  el.addEventListener(currentEvent, updateHLSFromValue);
}
