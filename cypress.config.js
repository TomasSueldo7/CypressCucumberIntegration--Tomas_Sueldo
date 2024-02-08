const {defineConfig} = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  return config;
}

module.exports = defineConfig({
  env: {
  },
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://practicetestautomation.com/practice-test-login/",
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});