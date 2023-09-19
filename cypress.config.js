const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter : 'cypress-mochawsome-reporter',
  e2e: {
    watchForFileChanges : false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter')(on);

      config.specPattern = [
        'cypress/e2e/LoginTest.cy.js',
      ]
      return config;
    },
  },
});
