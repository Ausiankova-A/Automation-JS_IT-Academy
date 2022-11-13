process.env.RESPONSE_TIMEOUT = '65000';

module.exports = {
  verbose: true,
  clearMocks: true,
  runner: 'jest-runner',
  testTimeout: 70000,
  rootDir: './',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  // setupFilesAfterEnv: ['./jestExpectExtends.js'],
  reporters: ['default', 'jest-junit', 'jest-html-reporter'],
};
