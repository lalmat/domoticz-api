import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import TerserPlugin from "terser-webpack-plugin";

let config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./bundle.js",
    library: "DomoticzApi",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "production") {
  config.optimization = {
    minimize: true,
    minimizer: [new TerserPlugin()],
  };
}

export default config;
