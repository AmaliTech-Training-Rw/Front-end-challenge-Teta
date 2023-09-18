import type { Config } from 'jest';

const config: Config = {
  // ... other config options ...

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // A list of file extensions your modules use
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],

  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/fileMock.ts",
    "\\.(css|less)$": "<rootDir>/mocks/fileMock.ts"
  },
  // The regexp pattern or array of patterns that Jest uses to detect test files
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',

  // The test environment that will be used for testing
  testEnvironment: 'jest-environment-jsdom',

  // Options that will be passed to the testEnvironment
  testEnvironmentOptions: {
    // If you are using TypeScript, you may need to set up TypeScript support here
    // For example, if you use ts-jest, you can add:
    // "tsConfig": "tsconfig.json",
    
    // You can also specify the type here
    type: 'module',
  },

  // Allows you to use a custom resolver instead of Jest's default test runner
  // resolver: undefined,

  // Other Jest configurations...

};

export default config;
