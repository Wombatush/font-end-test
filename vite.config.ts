import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import eslint from "vite-plugin-eslint";
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-macros', 'babel-plugin-styled-components']
      }
    }),
    eslint({
      lintOnStart: true,
      emitWarning: true,
      emitError: true,
      failOnWarning: true,
      failOnError: true
    }),
    svgr(),
    dts({
      insertTypesEntry: true,
    }),
    checker({
      typescript: true
    })
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "spotswap",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        "@reduxjs/toolkit",
        "axios",
        "clsx",
        "evergreen-ui",
        "formik",
        "react",
        "react-dom",
        "react-dropzone",
        "react-helmet",
        "react-router-dom",
        "relay-runtime",
        "styled-components",
        "yup",
      ],
      output: {
        globals: {
          "@reduxjs/toolkit": "ReduxJS",
          "axios": "axios",
          "auth0-js": "auth0",
          "clsx": "clsx",
          "evergreen-ui": "evergreen-ui",
          "formik": "formik",
          "react": "React",
          "react-dom": "ReactDOM",
          "react-dropzone": "react-dropzone",
          "react-helmet": "react-helmet",
          "react-router-dom": "ReactRouterDOM",
          "relay-runtime": "relay-runtime",
          "styled-components": "styled",
          "yup": "yup",
        },
      },
    },
  },
});
