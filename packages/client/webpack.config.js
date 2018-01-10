const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	resolve: {
		extensions: ['.js', '.css', '.less','.vue'], 
		alias: {
			vue$: 'vue/dist/vue.esm.js',
			Assets: path.resolve(__dirname, "src/resource"),
			Src: path.resolve(__dirname, "src"),
			Components: path.resolve(__dirname, "src/components")
		}
	},
	module: {
		rules: [
			{ test: /\.vue$/, use: "vue-loader"},
			{ test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
			{ test: /\.css$/, use: ['style-loader', {loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader']},
			{ test: /\.(png|svg|jpg|gif)$/, use: [ 'file-loader']},
			{ test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']}
		]
	},
	devtool: 'inline-source-map',
	plugins: [ 
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: "Meizu",
			filename: "index.html",
			template: path.resolve(__dirname, "index.html")
		})
	]
};