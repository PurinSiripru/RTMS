const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost/rtms/#/',
    specPattern: "cypress/e2e/*.spec.js",
    defaultCommandTimeout: 20000,
    testIsolation: false,
    experimentalMemoryManagement: true,
    failOnStatusCode: false,
    screenshotOnRunFailure: true, // เปิดการบันทึกสกรีนช็อตเมื่อการทดสอบล้มเหลว
    video: true, // เปิดการบันทึกวิดีโอ
    //numTestsKeptInMemory: 0,
  },
});
