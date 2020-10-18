const webpack = require("webpack");
const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');

let config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "./bundle.js",
        library: 'Domoticz',
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }]
    },

}

if (process.env.NODE_ENV === 'production') {
  config.optimization = {
    minimize: true,
    minimizer: [new TerserPlugin()],
  };
}

module.exports = config;

