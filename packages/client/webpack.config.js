const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname, "src/index.js"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	resolve: {
		extensions: [".js", ".css", ".less",".vue"], 
		alias: {
			vue$: "vue/dist/vue.esm.js",
			Assets: path.resolve(__dirname, "src/resource"),
			Src: path.resolve(__dirname, "src"),
			Components: path.resolve(__dirname, "src/components"),
			Utils: path.resolve(__dirname, "src/utils"),
			Resource: path.resolve(__dirname, "src/resource")
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/, 
				loader: "vue-loader",
				options: {
					postcss: [require('postcss-cssnext')()],
					cssModules: {
						localIdentName: '[path][name]---[local]---[hash:base64:5]',
						camelCase: true
					},
					loaders: {
						js: 'babel-loader',
						css: "style-loader!css-loader!postcss-loader!less-loader"
					}
				}
			},
		{ 
			test: /\.(png|svg|jpg|gif)$/, 
			use: [ "file-loader"]
		},
		{
			test: /\.(woff|woff2|eot|ttf|otf)$/, 
			use: ["file-loader"]
		},
		{
			test: /\.(less|css)$/,
			use: ['style-loader','css-loader','less-loader'],
		}
			 
		]
	},
	devtool: 'inline-source-map',
	devServer: {
	  	contentBase: path.join(__dirname, "dist"),
	  	compress: true,
	  	port: 10010,
	  	open: true,
	},
	plugins: [ 
		new CleanWebpackPlugin(["dist"]),
		new ExtractTextPlugin("style.css"),
		new HtmlWebpackPlugin({
			title: "Meizu",
			filename: "index.html",
			template: path.resolve(__dirname, "index.html")
		})
	]
};