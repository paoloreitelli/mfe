const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 5010,
    historyApiFallback: true,
  },
  output: {
    publicPath: "http://localhost:5010/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:5011/remoteEntry.js",
        auth: "auth@http://localhost:5012/remoteEntry.js",
        dashboard: "dashboard@http://localhost:5013/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
