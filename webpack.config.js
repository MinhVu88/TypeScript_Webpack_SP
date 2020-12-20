// https://stackoverflow.com/questions/40379139/cannot-find-module-webpack-bin-config-yargs
const path = require("path");

module.exports = {
  devtool: "eval-source-map",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")]
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  devServer: {
    publicPath: "/",
    contentBase: "./public",
    hot: true
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
};
