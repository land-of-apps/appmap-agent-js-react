const { join } = require("path");

module.exports = {
  mode: "production",
  entry: "./dist/index.js",
  output: {
    path: join(__dirname, "public"),
    filename: "index.js",
  },
};
