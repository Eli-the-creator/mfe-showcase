const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const common = require('./webpack.common.js');

const packegJson = require('../package.json');


const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html',
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                "./MarketingModule": "./src/bootstrap.js",
            },
            shared: packegJson.dependencies,
        }),
    ]
};

module.exports = merge(common, devConfig);