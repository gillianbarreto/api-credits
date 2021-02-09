module.exports = {
  "testEnvironment": "node",
  "moduleFileExtensions": [
    "js"
  ],
  "testMatch": [
    "<rootDir>/src/test/**/*.spec.js"
  ],
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/node_modules/"
  ],
  "coveragePathIgnorePatterns":[
    "<rootDir>/src/test",
    "<rootDir>/src/environment",
    "<rootDir>/src/index.js"
  ],
  "clearMocks": true,
  "resetModules": true,
  "timers": "fake"
};
