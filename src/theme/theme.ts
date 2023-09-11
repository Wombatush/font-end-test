import { CSSProperties } from "react";

export type MediaSize = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export const MediaBreakpoints: Record<MediaSize, string> = {
  xxs: "320px",
  xs: "375px",
  sm: "425px",
  md: "768px",
  lg: "1024px",
  xl: "1140px",
  xxl: "2560px",
};

export type Device = "mobile" | "tablet" | "desktop" | "printer";

export const DeviceQueries: Record<Device, string> = {
  mobile: `screen and (max-width: ${MediaBreakpoints.sm})`,
  tablet: `screen and (min-width: ${MediaBreakpoints.sm}) and (max-width: ${MediaBreakpoints.md})`,
  desktop: `screen and (min-width: ${MediaBreakpoints.md})`,
  printer: "print",
};

export type Color = string;

export type ColorWeight = 25 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

export type Colors = Record<ColorWeight, string>;

export type ColorEntry = {
  hex: Color;
  contrastText: Color;
};

export type ColorWeights = Record<ColorWeight, ColorEntry>;

export type ColorPalette = {
  white: ColorEntry;
  black: ColorEntry;
  grays: ColorWeights;
  error: ColorWeights;
  warning: ColorWeights;
  success: ColorWeights;
  primary: ColorWeights;
};

const colorWeightColorSelector = (
  weight: ColorWeight,
  light: Color,
  dark: Color,
  breakpoint: ColorWeight = 300,
): Color => (weight < breakpoint ? dark : light);

const colorWeightToColorEntry = (
  weight: ColorWeight,
  color: Color,
  textLightColor: Color,
  textDarkColor: Color,
  breakpoint: ColorWeight = 300,
): ColorEntry => ({
  hex: color,
  contrastText: colorWeightColorSelector(weight, textLightColor, textDarkColor, breakpoint),
});

const colorsToColorWeights = (
  colors: Colors,
  textDarkColor: Color,
  textLightColor: Color,
  breakpoint: ColorWeight = 300,
): ColorWeights => Object
  .keys(colors)
  .map(key => parseInt(key) as ColorWeight)
  .reduce((mapped, key) => ({
    ...mapped,
    [key]: colorWeightToColorEntry(key, colors[key], textLightColor, textDarkColor, breakpoint),
  }), { }) as ColorWeights;

const base = {
  white: "#FFFFFF",
  black: "#000000",
};

const grays: Colors = {
  [25]: "#FCFCFD",
  [50]: "#F9FAFB",
  [100]: "#F2F4F7",
  [200]: "#EAECF0",
  [300]: "#D0D5DD",
  [400]: "#98A2B3",
  [500]: "#667085",
  [600]: "#475467",
  [700]: "#344054",
  [800]: "#1D2939",
  [900]: "#101828",
  [950]: "#0C111D",
};

const primary: Colors = {
  [25]: "#FFFEFC",
  [50]: "#FFFBF6",
  [100]: "#FDEFDD",
  [200]: "#FBDBB5",
  [300]: "#F9C280",
  [400]: "#F5A442",
  [500]: "#F69D30",
  [600]: "#F28500",
  [700]: "#B46300",
  [800]: "#794300",
  [900]: "#472700",
  [950]: "#201200",
};

const error: Colors = {
  [25]: "#FFFBFA",
  [50]: "#FEF3F2",
  [100]: "#FEE4E2",
  [200]: "#FECDCA",
  [300]: "#FDA29B",
  [400]: "#F97066",
  [500]: "#F04438",
  [600]: "#D92D20",
  [700]: "#B42318",
  [800]: "#912018",
  [900]: "#7A271A",
  [950]: "#55160C",
};

const warning: Colors = {
  [25]: "#FFFCF5",
  [50]: "#FFFAEB",
  [100]: "#FEF0C7",
  [200]: "#FEDF89",
  [300]: "#FEC84B",
  [400]: "#FDB022",
  [500]: "#F79009",
  [600]: "#DC6803",
  [700]: "#B54708",
  [800]: "#93370D",
  [900]: "#7A2E0E",
  [950]: "#4E1D09",
};

const success: Colors = {
  [25]: "#F6FEF9",
  [50]: "#ECFDF3",
  [100]: "#DCFAE6",
  [200]: "#A9EFC5",
  [300]: "#75E0A7",
  [400]: "#47CD89",
  [500]: "#17B26A",
  [600]: "#079455",
  [700]: "#067647",
  [800]: "#085D3A",
  [900]: "#074D31",
  [950]: "#053321",
};

const palette: ColorPalette = {
  white: {
    hex: base.white,
    contrastText: base.black,
  },
  black: {
    hex: base.black,
    contrastText: base.white,
  },
  grays: colorsToColorWeights(grays, grays[500], base.white),
  error: colorsToColorWeights(error, error[700], base.white),
  warning: colorsToColorWeights(warning, warning[700], base.white),
  success: colorsToColorWeights(success, success[700], base.white),
  primary: colorsToColorWeights(primary, primary[700], base.white),
};

export interface ThemeColors {
  primary: CSSProperties["backgroundColor"];
  secondary: CSSProperties["backgroundColor"];
  tertiary: CSSProperties["backgroundColor"];
  foreground: CSSProperties["color"];
  background: CSSProperties["backgroundColor"];
  separator: CSSProperties["backgroundColor"];
}

export interface ThemeFont {
  weight: 100 | 300 | 400 | 700 | 900;
  style: CSSProperties["fontStyle"];
}

export interface ThemeSizes {
  header: CSSProperties["height"]
}

export interface ThemeState {
  palette: ColorPalette;
  colors: ThemeColors;
  sizes: {
    desktop: ThemeSizes;
  }
}

const initialState: ThemeState = {
  palette: palette,
  colors: {
    primary: "#F28500",
    secondary: "#000435",
    tertiary: "#242B34",
    foreground: "#F28500",
    background: "#FAFAFA",
    separator: "#F0F0F0",
  },
  sizes: {
    desktop: {
      header: "64px",
    },
  },
};

export { initialState as defaultTheme };

export default initialState;
