'use strict';

module.exports = {
  testEnvironment: 'node',
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/*.test.js'],
  moduleFileExtensions: ['js', 'json'],
};
