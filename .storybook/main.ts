const path = require('path');

module.exports = {
  stories: [
    "../src/**/*.stories.@(ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  core: {
    disableTelemetry: true
  },
  viteFinal: config => {
    return {
      ...config,
      define: { 'process.env': {} },
      resolve: {
        alias: [{
          find: 'src',
          replacement: path.resolve(__dirname, "../src")
        }]
      }
    };
  }
};
