import {app} from "../index";
import {stateCheck, clearTime} from "./functions";
// import { timer } from './renderScreenGame'

function gameOver(
	text: string,
	imgs: string,
	minutes: number,
	seconds: number,
) {
	clearTime();
	const fragment = new DocumentFragment();
	const screen = document.createElement("div");
	screen.classList.add("screen");
	const p = document.createElement("p");
	p.classList.add(`title_${imgs}`);
	p.textContent = text;
	const img = document.createElement("p");
	img.classList.add(imgs);
	// img.setAttribute("src", imgs + ".svg");
	const titleTime = document.createElement("p");
	titleTime.textContent = "Затраченное время:";
	titleTime.classList.add("title_time");
	const time = document.createElement("span");
	time.textContent = `${minutes.toString().padStart(2, "0")}.${seconds
		.toString()
		.padStart(2, "0")}`;
	time.classList.add("time_over");
	const button = document.createElement("button");
	button.textContent = "Играть снова";
	button.classList.add("startButton");
	screen.appendChild(img);
	screen.appendChild(p);
	screen.appendChild(titleTime);
	screen.appendChild(time);
	screen.appendChild(button);
	fragment.append(screen);

	return fragment;
}

export function renderOver(
	text: string,
	imgs: string,
	minutes: number,
	seconds: number,
) {
	clearTime();
	const div = document.createElement("div");
	div.classList.add("layout");
	app?.append(div);
	app?.append(gameOver(text, imgs, minutes, seconds));
	const startButton: HTMLElement | null =
		document.querySelector(".startButton");
	startButton?.addEventListener("click", () => {
		localStorage.clear();
		stateCheck("state", "Start");
	});
}