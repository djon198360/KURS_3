 const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); 
const MiniCssExtractPlugin = require ("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require ("css-minimizer-webpack-plugin");

module.exports = {
	mode: 'production',
	entry: './index.js', // Входной файл, в котором мы пишем свой код
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		clean: true,
	  },
	module:{
		rules: [
			{ test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader' ] },
			//{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
			{
			  test: /\.(png|svg|jpg|jpeg|gif)$/i,
			  type: "asset/resource",
			},
			{
			  test: /\.(woff|woff2|eot|ttf|otf)$/i,
			  type: "asset/resource",
			},
		  ]
	},
	
	optimization:{
		minimizer:["...", new CssMinimizerWebpackPlugin()],
	},
	plugins:[new HtmlWebpackPlugin({
			template:"index.html",
		}),
		new MiniCssExtractPlugin(),
	],   
	/*убрать для продакшн*/ 	devtool: "source-map",
}
