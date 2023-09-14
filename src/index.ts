import { ThemeState } from "./theme";

export * from "./components/ProgressCircle";
export * from "./components/Typography";
export * from "./components/Checkbox";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeState {

  }
}
