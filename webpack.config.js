const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: "./index.ts", // Входной файл, в котором мы пишем свой код
	mode: process.env.NODE_ENV === "production" ? "production" : "development",
	output: {
		path: path.resolve(__dirname, "./dist/"),
		filename: "main.js",
		clean: true,
	},
	module: {
		rules: [
			{test: /\.ts$/, use: "ts-loader", exclude: /node_modules/},
			{test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"]},
			{test: /\.svg$/, type: "asset/resource"},
			{test: /\.(woff|woff2|eot|ttf|otf|ico)$/, type: "asset/resource"},
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	optimization: {
		minimizer: ["...", new CssMinimizerWebpackPlugin()],
	},
	devtool: process.env.NODE_ENV === "production" ? false : "source-map",
	devServer: {
		static: {
			directory: path.resolve(__dirname, "public"), // Каталог для статики
		},
		open: true, // Автоматически открывать браузер
	},
	plugins: [
		new HtmlWebpackPlugin({template: "index.html"}),
		new MiniCssExtractPlugin(),
		new CopyPlugin({patterns:[{from:'img',to:'../public/img'},{from:'img/ico',to:'../public'},],}),
	],
};
