/**
 * @jest-environment jsdom
 */

//import { getListContent } from "./js_component/renderScreenGame";

//const {PAGE} = require("./index");
//const {getListContent} = require("./js_component/renderScreenGame")
const {it, expect, describe} = require("@jest/globals");
//import { it, expect }  from ("@jest/globals");
/*   it("Проверяем получения значиний из локалсторедж", () => {
   const minus = require('./sum');
    expect(minus(5,3)).toBe(9);
  });    */

describe("test game", () => {
	/* 	describe("test index page", () => {
		it("бесполезная проверка", () => {
			const unit = require("./index");

			expect(PAGE).toEqual(unit.PAGE);
		});
	}); */
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

		const cards1 = getListContent(); //Пробоал getListContent
		const cards2 = getListContent();

		expect(cards1).not.toEqual(cards2); //пробовал разные вариации cards1.Array cards1.newArr
	});
});
