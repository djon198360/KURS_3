/**
 * @jest-environment jsdom
 */

const {it, expect, describe} = require("@jest/globals");
const {
	getCardDeck,
	renderCard,
} = require("./js_component/renderScreenGame");

describe("test game ", () => {
	const mockFridge = {};
	beforeEach(() => {
		global.Storage.prototype.setItem = jest.fn((key, value) => {
			mockFridge[key] = value;
		});
		global.Storage.prototype.getItem = jest.fn((key) => mockFridge[key]);
	});

	it("get array card", () => {
		global.Storage.prototype.setItem("gameComplexity", 1);

		const arrayCards1 = getCardDeck();
		const arrayCards2 = getCardDeck();
		expect(arrayCards1).not.toEqual(arrayCards2);
	});

	it("get render card", () => {
		const arrayCards1 = getCardDeck();
		const arrayCards2 = getCardDeck();
		expect(renderCard(arrayCards1)).not.toEqual(renderCard(arrayCards2));
	});
});
