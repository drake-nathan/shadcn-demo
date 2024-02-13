import path from "path";

/** @type {import('jest').Config} */
const jestConfig = {
  collectCoverage: false,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  roots: ["<rootDir>/src"],
  setupFilesAfterEnv: [path.resolve("src/test-utils", "setupTests.ts")],
  testEnvironment: "jsdom",
  testMatch: ["**/*.(spec|test).{js,ts,tsx}"],
  transform: {
    "^.+\\.(js)$": "babel-jest",
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  "transformIgnorePatterns": [],
};

export default jestConfig;
