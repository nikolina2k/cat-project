const config = {
    preset: 'ts-jest/presets/js-with-ts',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
        "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
    },
  };
  
  module.exports = config;