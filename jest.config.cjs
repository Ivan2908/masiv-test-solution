/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
  resolver: 'ts-jest-resolver',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  rootDir: __dirname,
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  modulePaths: ['<rootDir>/src/'],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx,vue}',
    '!src/**/*.d.ts',
    '!src/main.ts',
  ],
  moduleDirectories: ['node_modules', 'src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$',
  moduleFileExtensions: ['json', 'js', 'jsx', 'ts', 'tsx', 'vue'],
};
