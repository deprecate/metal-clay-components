const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/ClayButton.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						compact: false,
						presets: ['babel-preset-es2015'],
						plugins: ['babel-plugin-transform-node-env-inline'],
					},
				},
			},
		],
	},
	output: {
		library: 'metal',
		libraryTarget: 'this',
		filename: './build/globals/clay-button.js',
	},
	plugins: [new webpack.optimize.ModuleConcatenationPlugin()],
	resolve: {
		mainFields: ['esnext:main', 'main'],
		alias: {
			'incremental-dom': path.resolve('./node_modules/incremental-dom'),
			'metal-incremental-dom': path.resolve(
				'./node_modules/metal-incremental-dom',
			),
			'metal-soy-bundle': path.resolve('./node_modules/metal-soy-bundle'),
		},
	},
};
