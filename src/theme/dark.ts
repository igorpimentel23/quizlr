import { ITheme, extendTheme } from 'native-base';
import { DefaultTheme } from 'styled-components/dist/types';
import { fonts } from './fonts';
import { spacing } from './spacing';

const colors = {
  green: {
    400: '#28B18F',
    500: '#00FF00',
  },
  yellow: {
    400: '#FFD449',
    500: '#BB8F00',
  },
  blue: {
    400: '#34CBC2',
    500: '#00425A',
  },
  orange: {
    400: '#FBB668',
    500: '#F17D23',
  },
  error: '#D84E4E',
};

const darkBaseTheme: ITheme = extendTheme({
  colors,
});

const dark: DefaultTheme = {
  colors: {
    primary: '#003A4F',
    secondary: '#002634',
    gradient: {
      start: '#002634',
      end: '#00425A',
    },
    background: '#000',
    text: '#fff',
    ...colors,
  },
  fonts,
  ...spacing,
};

export { dark, darkBaseTheme };
