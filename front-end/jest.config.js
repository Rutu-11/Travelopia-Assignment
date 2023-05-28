module.exports = {
  "testMatch": [
    "<rootDir>/src/__tests__/**/*.test.(js|jsx|ts|tsx)"
  ],
  "testPathIgnorePatterns": [
    "/node_modules/"
  ],
  "transform": {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
  "moduleNameMapper": {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^axios$": "axios"
  },
  "moduleFileExtensions": [
    "js",
    "jsx",
    "ts",
    "tsx"
  ]
}

