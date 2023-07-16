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

	it("game test get", () => {
		const {getListContent} = require("./js_component/renderScreenGame");

		const cards1 = getListContent(); //Пробоал getListContent
		const cards2 = getListContent();

		expect(cards1).toBe(cards2.array); //пробовал разные вариации cards1.Array cards1.newArr
	});
});
