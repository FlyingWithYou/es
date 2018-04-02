const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BableObjectSpread = require('babel-plugin-transform-object-rest-spread');

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
			Resource: path.resolve(__dirname, "src/resource"),
			Store: path.resolve(__dirname, "src/store"),
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
						css: "style-loader!css-loader!postcss-loader!less-loader"
					}
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
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
	  	proxy: {
            "/": {
                target: 'http://47.100.53.48:8080',
                secure: false
            }
       },
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