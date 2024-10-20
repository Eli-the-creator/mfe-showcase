const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const common = require('./webpack.common.js');

const packetJson = require('../package.json');


const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html',
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8080/remoteEntry.js',
            },
            shared: packetJson.dependencies ,
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};


module.exports = merge(common, devConfig);