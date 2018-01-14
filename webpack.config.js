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
            },
            {
				test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'dist/fonts/',    // where the fonts will go
						publicPath: '../'       // override the default path
					}
				}]
			},
			{
				// Transform our own .css files with PostCSS and CSS-modules
				test: /\.css$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "sass-loader" // compiles Sass to CSS
				}]
			}
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};
