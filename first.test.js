/**
 * @jest-environment jsdom
 */

const {it, expect, describe} = require("@jest/globals");


describe("test game", () => {
	let mockFridge = {};
	beforeEach(() => {
		global.Storage.prototype.setItem = jest.fn((key, value) => {
			mockFridge[key] = value;
		});
		global.Storage.prototype.getItem = jest.fn((key) => {
			return mockFridge[key];
		});
	});

	it("game test get", () => {
		global.Storage.prototype.setItem("qual", 1);

		const {getListContent} = require("./js_component/renderScreenGame");

		const cards1 = getListContent();

		const cards2 = getListContent();
		
		expect(cards1).not.toEqual(cards2);
	});
});
