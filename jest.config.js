module.exports = {
  setupTestFrameworkScriptFile: "./test/enzyme.setup.js",
  transform: {
    '^.+\\.js$': 'babel-jest',
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  }
};
