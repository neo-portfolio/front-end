const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
require('dotenv').config();

module.exports = {
    webpack: (config) => {
        if (config.resolve.plugins) {
            config.resolve.plugins.push(new TsconfigPathsPlugin());
        } else {
            config.resolve.plugins = [new TsconfigPathsPlugin()];
        }

        return config;
    },
    target: "serverless",
    env: {
        API_URL: process.env.API_URL
    }
};