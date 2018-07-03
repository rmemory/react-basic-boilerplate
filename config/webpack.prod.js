/* eslint-disable import/no-extraneous-dependencies */
const commonPaths = require('./common-paths');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	mode: 'production',

	entry: {
		app: ['babel-polyfill', `${commonPaths.appEntry}/index.js`],
	},

	output: {
		filename: 'static/[name].[hash].js',
	},

	devtool: 'source-map', /* A full SourceMap is emitted as a separate file.
							  It adds a reference comment to the bundle so
							  development tools know where to find it. To
							  entirely omit source maps, remove this line */

	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true,
								importLoaders: 1,
								camelCase: true,
								sourceMap: true,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								config: {
									ctx: {
										autoprefixer: {
											browsers: 'last 2 versions',
										},
									},
								},
							},
						},
					],
				}),
			},
		],
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'styles/styles.[hash].css',
			allChunks: true,
		}),
	],
};
module.exports = config;
