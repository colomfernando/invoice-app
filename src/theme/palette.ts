const palette = {
  primary: '#2A9D8F',
  error: {
    main: '#ED4337',
  },
  success: {
    main: '#4cc355',
  },
  common: {
    black: '#000',
    white: '#fff',
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    700: '#616161',
    600: '#757575',
    800: '#424242',
    900: '#212121',
  },

  status: {
    paid: '#4cc355',
    pending: '#F19143',
  },
};

export const hexToRgb = (hex: string): string => {
  const hexReplace = hex.replace(
    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    (_m, r, g, b) => '#' + r + r + g + g + b + b
  );

  const subString = hexReplace.substring(1);
  const matchHex = subString.match(/.{2}/g) || [];
  const joinHex = matchHex.map((x) => parseInt(x, 16)).join(',');
  return joinHex;
};

export default palette;
