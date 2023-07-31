import {app} from "../index";
import {stateCheck, seconds, minutes, clearTime, startTime} from "./functions";
import {renderOver} from "./renderScreenOver";

const pause = Number(5 * 1000);

export const CARDRANK = [6, 7, 8, 9, 10, "j", "q", "k", "a"];
export const CARDSUIT = ["peaks", "baptize", "bubi", "worms"];

export function renderGame() {
	clearTime();
	startTime();
	(app as HTMLElement).innerHTML = `
             <div class="header">
                  <div class="timer"><div class="timer_header"><span class="min">min</span><span class="sek">sek</span></div><span class="time">00.00</span></div>
                  <button class="restart">Начать заново</button>
            </div>
            <div class="card_table">
            </div>
                `;
	const cardTable: HTMLElement | null = document.querySelector(".card_table");
	if (cardTable) {
		const array = getCardDeck();
		cardTable.append(renderCard(array.sort(() => Math.random() - 0.5)));
		cardTable.style.pointerEvents = "none";
	}

	let cardAllTable = Array.from(document.querySelectorAll(".card"));
	// вызываем функцию по клику на .card
	let tempCardValue: String | null;
	for (let clickedCard of cardAllTable) {
		(clickedCard as HTMLElement).onclick = () => {
			if (clickedCard.classList.contains("open")) return;
			let clickedCardValue: string | null =
				clickedCard.getAttribute("data-number");
			clickedCard.children[0].classList.remove("close");
			clickedCard.classList.add("open");
			clickedCard.classList.remove("close");
			if (tempCardValue) {
				clickedCard.classList.remove("close");
				clickedCard.classList.add("open");
				if (tempCardValue === clickedCardValue) {
					if (document.querySelectorAll(".close").length <= 0) {
						renderOver(
							"Вы выиграли" as string,
							"victory" as string,
							minutes,
							seconds,
						);
						clearTime();
					}

					tempCardValue = "";
				} else {
					renderOver(
						"Вы проиграли" as string,
						"over" as string,
						minutes,
						seconds,
					);
					clearTime();
					return ((cardTable as HTMLElement).style.pointerEvents =
						"none");
				}
			} else tempCardValue = clickedCardValue;
		};
	}
	const cardImgAll = Array.from(document.querySelectorAll(".card"));
	for (let elem of cardImgAll) {
		setTimeout(function () {
			(elem as Element).children[0].classList.add("close");
			(elem as Element).classList.add("close");
			(cardTable as HTMLElement).style.pointerEvents = "unset";
		}, pause);
	}

	const restart: HTMLElement | null = document.querySelector(".restart");
	(restart as HTMLElement).addEventListener("click", (e) => {
		stateCheck("state", "Game");
		renderGame();
	});
}

export const renderCard = (cardArray: Array<string>) => {
	let fragment = new DocumentFragment();
	cardArray.sort(() => Math.random() - 0.5);
	for (let i = 0; i < cardArray.length; i++) {
		let card = document.createElement("div");
		let fon = document.createElement("img");
		card.classList.add("card");
		card.dataset.number = cardArray[i];
		fon.setAttribute("src", "img/" + cardArray[i] + ".svg");
		fon.classList.add("card_img");
		card.appendChild(fon);
		fragment.append(card);
	}
	return fragment;
};

export const getCardDeck = () => {
	let cardArray = new Array();
	let gameComplexity = localStorage.getItem("gameComplexity");
	let result = 6 * Number(gameComplexity);
	for (let i = 0; i < result / 2; i++) {
		let y = Math.floor(Math.random() * CARDRANK.length);
		let z = Math.floor(Math.random() * CARDSUIT.length);
		cardArray.push(CARDRANK[y] + CARDSUIT[z], CARDRANK[y] + CARDSUIT[z]);
	}
	cardArray.sort(() => Math.random() - 0.5);
	return cardArray;
};
