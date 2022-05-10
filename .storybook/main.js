module.exports = {
  "stories": [
    "../src/**/*.story.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],

  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "babel": async (options) => ({
    ...options,
    presets: [...options.presets, "@emotion/babel-preset-css-prop"],
  }),
}