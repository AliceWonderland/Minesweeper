const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: 'index.html',
	filename: 'index.html',
	inject: 'body'
});


module.exports = {
    entry: "./game/index.js",
    output: {
        path: __dirname,
        filename: "dist/index.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};
