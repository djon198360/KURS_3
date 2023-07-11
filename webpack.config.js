const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
	
	mode: process.env.NODE_ENV === "production" ? "production" : "development",
	entry: './index.ts', // Входной файл, в котором мы пишем свой код
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// all options are optional
			filename: 'style.css',
			/* 			chunkFilename: '[id].css',
			ignoreOrder: false, // Enable to remove warnings about conflicting order */
		}),
	],
	module: {
		rules: [
			{ test: /\.ts$/i, use: 'ts-loader', exclude: /node_modules/ },
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			//	{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },

			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				//type: 'asset/inline',
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				type: 'asset/resource',
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				use: [
				  {
					loader: 'file-loader',
					options: {
					 // name: '[path][name].[ext]',
					 name: '[name].[ext]',
					},
				  },
				],
			}
		],
	},
	optimization: {
		minimizer: ['...', new CssMinimizerWebpackPlugin()],
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	devServer: {
		static: {
		  directory: path.join(__dirname, 'dist'), // Каталог для статики
		},
		open: true, // Автоматически открывать браузер
	  },
	/*убрать для продакшн*/ 
	devtool: process.env.NODE_ENV === "production" ? false : "source-map",
}
