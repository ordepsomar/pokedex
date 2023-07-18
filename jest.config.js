module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
      astTransformers: {
        before: [
          "jest-preset-angular/build/InlineFilesTransformer",
          "jest-preset-angular/build/StripStylesTransformer",
        ],
      },
    },
  },
  moduleNameMapper: {
    "@app/(.*)": "<rootDir>/src/app/$1",
    "@assets/(.*)": "<rootDir>/src/assets/$1",
    "@shared/(.*)": "<rootDir>/src/app/shared/$1",
  },
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest",
  },
  testMatch: ["**/*.spec.ts"],
  moduleFileExtensions: ["ts", "html", "js", "json"],
  coverageDirectory: "./coverage",
  collectCoverageFrom: [
    "<rootDir>/src/app/**/*.ts",
    "!<rootDir>/src/app/**/*.module.ts",
    "!<rootDir>/src/app/**/index.ts",
    "!<rootDir>/src/app/**/*.spec.ts",
    "!<rootDir>/src/app/**/*.d.ts",
  ],
};
