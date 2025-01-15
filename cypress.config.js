const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost/rtms/#/',
    specPattern: "cypress/e2e/*.spec.js",
    defaultCommandTimeout: 20000,
    testIsolation: false,
    experimentalMemoryManagement: true,
    //numTestsKeptInMemory: 0,
    screenshotOnRunFailure: true, // เปิดการบันทึกสกรีนช็อตเมื่อการทดสอบล้มเหลว
    video: true, // เปิดการบันทึกวิดีโอ
  },
});
