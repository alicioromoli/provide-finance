/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "jest-environment-jsdom",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!your-module)"],
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  globals: {
    fetch: global.fetch,
  },
};

export default config;
