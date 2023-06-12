let colors = [
  '#5A5C75',
  '#5d5d5d',
  '#5E6D7B',
  '#6d7993',
  '#6e665c',
  '#76AFD4',
  '#787878',
  '#7F7F7F',
  '#8298BA',
  '#8596a2',
  '#8c8c8c',
  '#99badd',
  '#9ca3a4',
  '#9FD8D2',
  '#A0D8EF',
  '#A4A4A4',
  '#a66b6b',
  '#A8B2B2',
  '#A8CABA',
  '#A9B0B0',
  '#A9CCE3',
  '#ABC8E2',
  '#b0cac7',
  '#B3C4D4',
  '#B4C4B4',
  '#B5B2A8',
  '#B5B5B5',
  '#B5C7D3',
  '#B6B6B6',
  '#B6B7C7',
  '#B6C8C9',
  '#B7B6B6',
  '#B7D1C9',
  '#B8A79F',
  '#B8C3CD',
  '#B9B7BD',
  '#b9c6ae',
  '#bc8f8f',
  '#c08e80',
  '#C0B3B3',
  '#C0D6D1',
  '#C1BDB6',
  '#C1D2C8',
  '#C4C4C4',
  '#C5D0E6',
  '#C5E4E7',
  '#C6C4C4',
  '#C7A589',
  '#C7C1A9',
  '#C8B8B0',
  '#CEAF88',
  '#D1B0B5',
  '#D1C4A4',
  '#D2B0B0',
  '#d2b48c',
  '#D2C1B9',
  '#D2D9E1',
  '#D2E2DD',
  '#D3B6C6',
  '#D3C6B8',
  '#D4C4AF',
  '#D4D3CD',
  '#D4E4DE',
  '#D4F1F4',
  '#D5A986',
  '#D5C1B7',
  '#d5c99f',
  '#D5D5D5',
  '#D5E5E5',
  '#D5E9E3',
  '#D6B1B1',
  '#D6B1B2',
  '#D6E4F0',
  '#D6E7D6',
  '#D6EAF8',
  '#D8CCB9',
  '#D8E8E1',
  '#D8ECE5',
  '#D9D9D9',
  '#D9E4E1',
  '#D9E9E3',
  '#D9E9E7',
  '#DEDEDE',
  '#DFCFBE',
  '#DFE7E1',
  '#E0D8CD',
  '#E0E2D9',
  '#e0eee8',
  '#E1D6C7',
  '#E1D8C9',
  '#E1D9D0',
  '#E1F1F2',
  '#E2C8AF',
  '#E2D2C2',
  '#E2D9DA',
  '#E2DFCF',
  '#E3C8A2',
  '#E3D3C3',
  '#E3D8C8',
  '#E3E2D7',
  '#E4C8A4',
  '#E5E5C3',
  '#E6C0B8',
  '#E6C9A6',
  '#E6D2C0',
  '#E6D3B6',
  '#E7C2A8',
  '#E7C5A5',
  '#E7E0D5',
  '#E7EFE9',
  '#E8C8A9',
  '#E8C9A9',
  '#E8D0B7',
  '#E8D4B4',
  '#E8DDD1',
  '#E8E4D4',
  '#E8F4F4',
  '#E9D3C3',
  '#E9E3D3',
  '#EAD7AA',
  '#EAF7E7',
  '#EDEEE2',
  '#EED7B1',
  '#EEE5D5',
  '#F0D7BE',
  '#F1D1B5',
  '#f1e7a1',
  '#F1EAD7',
  '#f2b59f',
  '#F2E2C9',
  '#F2E5C2',
  '#f2e9e4',
  '#F2F2F2',
  '#f3d4a0',
  '#F3ECD8',
  '#F3ECE3',
  '#F4DFC4',
  '#F4EEE3',
  '#f8b195',
  '#f8c9a9',
  '#F8F4E3',
  '#fad0c4',
  '#fbe3cf',
  '#FCEDED',
  '#FFEFC0',
  '#FFF9E6',
];
let colors1 = [];
let colors2 = [];
for (let i = 0; i < colors.length; i++) {
  if (isDarkColor(colors[i])) {
    colors1.push(colors[i]);
  } else {
    colors2.push(colors[i]);
  }
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ?
    {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    } :
    null;
}
function hexToRgba(hex, opacity) {
  const rgb = hexToRgb(hex);
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
}

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }

    h /= 6;
  }

  return {
    h: h * 360,
    s: s * 100,
    l: l * 100
  };
}

// 判断颜色是否为较暗的颜色
function isDarkColor(backgroundColor) {
  const luminanceThreshold = 0.7;
  const rgb = hexToRgb(backgroundColor);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  if (hsl.l > luminanceThreshold * 100) {
    // 对于较亮的背景，使用较深的灰色
    return false;
  } else {
    // 对于较暗的背景，使用较浅的灰色
    return true;
  }
}


const getRandomItemFromArray = (() => {
  let lastItem;
  function getRandomItem(array) {
    if (typeof array === 'undefined' || array.length === 0) { }
    let index = Math.floor(Math.random() * array.length);
    if (array.length > 1 && array[index] === lastItem) {
      return getRandomItem(array);
    }
    lastItem = array[index];
    return lastItem;
  }
  return getRandomItem;
})();

// 获取同类的的两种随机颜色，都是暗色或者都是亮色
function getRandomColors() {
  // 先随机是从暗色还是亮色中选取
  const isDark = Math.random() > 0.5;
  const colors = isDark ? colors1 : colors2;
  // 要保证两种颜色不一样
  const color1 = getRandomItemFromArray(colors);
  let color2 = getRandomItemFromArray(colors);

  return [color1, color2];
}

const backgroundTypes = ['linear-gradient', 'radial-gradient'];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomRadialBackground({
  positionXMin = 0,
  positionXMax = 100,
  positionYMin = 0,
  positionYMax = 100,
} = {}) {
  const shape = `ellipse`;
  const positionX = `${getRandomInt(positionXMin, positionXMax)}%`;
  const positionY = `${getRandomInt(positionYMin, positionYMax)}%`;
  const [color1, color2] = getRandomColors();
  const background = `radial-gradient(${shape} at ${positionX} ${positionY}, ${color1}, ${color2})`;
  return background;
}

function generateRandomBackground() {
  const angle = getRandomInt(0, 360);
  const type = getRandomItemFromArray(backgroundTypes);
  if (type === 'linear-gradient') {
    // 获取两种颜色
    const [color1, color2] = getRandomColors();
    return `linear-gradient(${angle}deg, ${color1} 0%, ${color2} 100%)`;
  } else if (type === 'radial-gradient') {
    return generateRandomRadialBackground();
  } else {
    return getRandomItemFromArray(colors)
  }
}
const background = generateRandomBackground();
document.body.style.background = background;