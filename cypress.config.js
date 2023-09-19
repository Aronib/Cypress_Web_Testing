const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter : 'cypress-mochawsome-reporter',
  e2e: {
    watchForFileChanges : false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

      config.specPattern = [
        'cypress/e2e/LoginTest.cy.js',
        'cypress/e2e/AddToCartTest.cy.js',
      ]
      return config;
    },
  },
});
