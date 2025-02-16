import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primaryColor: string;
      primaryColorAlt: string;
      primaryColorLighter: string;
      titleColor: string;
      textColor: string;
      textLighter: string;
      inputColor: string;
      bodyColor: string;
      containerColor: string;
      white: string;
      concluded: string;
      inProgress: string;
      errorMessage: string;
    };
    fontSizes: {
      biggest: string;
      bigger: string;
      h1: string;
      h2: string;
      h3: string;
      normal: string;
      small: string;
      smaller: string;
      headerHeight: string;
    };
    fontWeights: {
      regular: number;
      medium: number;
      semiBold: number;
    };
  }
}
