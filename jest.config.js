/* @type {import('ts-jest').JestConfigWithTsJest} */
/*
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
 */

const {defaults: tsjPreset} = require("ts-jest/presets");

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	//...tsjPreset,
	preset: "ts-jest",
	transform: {
		"^.+\\.jsx$": "babel-jest",
		"^.+\\.ts$": "ts-jest",
		".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
			"jest-transform-stub",
		"^.+\\.tsx?$": [
			"ts-jest",
			{
				tsconfig: "tsconfig.spec.json",
			},
		],
	},
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
