import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  cacheDirectory: `${__dirname}/.jest_cache`,
  roots: ["<rootDir>/lib"],
  preset: "ts-jest",
  testRegex: "(.*.(test|spec)).(jsx?|tsx?|ts?)$",
  moduleFileExtensions: ["ts", "js", "json"],
  collectCoverage: true,
  silent: false,
  verbose: true,
  collectCoverageFrom: [
    "**/src/**/*.ts",
    "!**/node_modules/**",
    "!**/*.test.data.ts",
  ],
  coveragePathIgnorePatterns: [
    ".*test\\.data\\.ts$,migrations.*.ts$,(.*.(test|spec)).(jsx?|tsx?)$,(tests/.*.mock).(jsx?|tsx?)$",
  ],
  coverageReporters: ["json", "lcov", "text", "clover", "cobertura"],
};

export default config;
