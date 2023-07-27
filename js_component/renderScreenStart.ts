import {app} from "../index";
import {stateCheck} from "./functions";

export function renderStart() {
	const textStart = "Выбери сложность";
	if (app) {
		app.innerHTML = `
                      <div class="screen">  
                            <p class="title">${textStart}</p>
                            <div class="gameComplexity">
                                <input type="radio" id="radio1" name="radios" value="1">
                                <label class="but one" for="radio1">1</label>
                                <input type="radio" id="radio2" name="radios" value="2">
                                <label class="but two" for="radio2">2</label>                  
                                <input type="radio" id="radio3" name="radios" value="3">
                                <label class="but free" for="radio3">3</label>
                            </div>
                            <button class="startButton" disabled="true">Старт</button>
                      </div>
                `;
	}
	clickApp();
}

export const clickApp = () => {
	let gameComplexity: string = "0";
	const buttons = document.querySelectorAll(".but");
	const startButton: HTMLElement | null = document.querySelector(".startButton");
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", (e) => {
			let target: EventTarget | null = e.target;
			for (let i = 0; i < buttons.length; i++) {
				buttons[i].classList.remove("active");
			}
			gameComplexity = (target as HTMLElement).textContent as string;
			(target as HTMLElement).classList.add("active");
			(startButton as HTMLElement).removeAttribute("disabled");
		});
	}

	startButton?.addEventListener("click", (e) => {
		stateCheck("gameComplexity", gameComplexity);
		stateCheck("state", "Game");
	});
};
