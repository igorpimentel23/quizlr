import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      gradient: {
        start: string;
        end: string;
      };
      background: string;
      text: string;
      secondaryText: string;
      green: {
        400: string;
        500: string;
      };
      yellow: {
        400: string;
        500: string;
      };
      blue: {
        400: string;
        500: string;
      };
      orange: {
        400: string;
        500: string;
      };
      error: string;
    };
    fonts: {
      sizes: {
        xxxs: string;
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
        xxxl: string;
        raw: {
          xxxs: number;
          xxs: number;
          xs: number;
          sm: number;
          md: number;
          lg: number;
          xl: number;
          xxl: number;
          xxxl: number;
        };
      };
      family: {
        regular: string;
        medium: string;
        semibold: string;
        bold: string;
        light: string;
      };
    };
    margin: {
      xxxs: string;
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
      raw: {
        xxxs: number;
        xxs: number;
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
        xxxl: number;
      };
    };
    padding: {
      xl: string;
      sm: string;
      md: string;
      lg: string;
      raw: {
        xl: number;
        sm: number;
        md: number;
        lg: number;
      };
    };
  }
}
