const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost/rtms/#/',
    specPattern: "cypress/e2e/*.spec.js",
    defaultCommandTimeout: 20000,
    testIsolation: false,
    experimentalMemoryManagement: true,
  },
});
