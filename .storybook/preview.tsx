import { ThemeProvider } from "styled-components";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import GlobalStyles from "../src/components/GlobalStyles";
import { defaultTheme } from "../src/theme"

// noinspection JSUnusedGlobalSymbols
export const decorators = [
  (Story) => (
    <MemoryRouter>
      <Routes>
        <Route path="*" element={<Story />} />
      </Routes>
    </MemoryRouter>
  ),
  withThemeFromJSXProvider({
    themes: {
      regular: defaultTheme
    },
    Provider: ThemeProvider,
    GlobalStyles})
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'Default',
    values: [
      {
        name: 'Default',
        value: defaultTheme.colors.background,
      },
      {
        name: 'Theme white',
        value: defaultTheme.palette.white.hex,
      },
      {
        name: 'Theme black',
        value: defaultTheme.palette.black.hex,
      },
    ],
  },
  parameters: {
    layout: "centered",
  },
};
