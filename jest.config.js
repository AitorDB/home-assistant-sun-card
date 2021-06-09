
module.exports = {
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [],
  transform: {
    '^.+\\\\node_modules\\\\lit-element\\\\.*?\\\\*?.js$': 'ts-jest',
    '^.+\\node_modules\\lit-element\\.*?\\*?.js$': 'ts-jest',
    '^.+/node_modules/lit-element/.*?/*?.js$': 'ts-jest',
    '^.+\\\\node_modules\\\\lit-html\\\\.*?\\\\*?.js$': 'ts-jest',
    '^.+\\node_modules\\lit-html\\.*?\\*?.js$': 'ts-jest',
    '^.+/node_modules/lit-html/.*?/*?.js$': 'ts-jest',
    '^.+\\\\node_modules\\\\.*?\\\\es\\\\.*?\\\\*?.js$': 'ts-jest',
    '^.+\\node_modules\\.*?\\es\\.*?\\*?.js$': 'ts-jest',
    '^.+/node_modules/.*?/es/.*?/*?.js$': 'ts-jest',
    '^.+\\.ts$': 'ts-jest',
    '^.+.ts$': 'ts-jest'
  },
  coverageReporters: ['json-summary', 'text', 'lcov'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts'
  ],
  coveragePathIgnorePatterns: [
    '.d.ts',
    'src/types/',
    'index.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 30,
      lines: 50,
      statements: 50
    }
  },
  setupFiles: [
    './tests/helpers/TestHelpers.ts'
  ]
};