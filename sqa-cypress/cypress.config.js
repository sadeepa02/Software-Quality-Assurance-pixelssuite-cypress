const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.pixelssuite.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    screenshotsFolder: 'cypress/screenshots',
    video: false,
  },
})