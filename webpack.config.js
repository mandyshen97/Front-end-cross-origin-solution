let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		filename: 'bundle.min.js',
		path: path.resolve(__dirname, 'build')
	},
	devServer: {
		port: 3000,
		progress: true,
		contentBase: './build',
		proxy: { // => 以'/'开始的请求，就把请求路径转到 target
			'/': {
				target: 'http://127.0.0.1:3001',
				changeOrigin: true // => 允许跨域
			}
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html'
		})
	]
};