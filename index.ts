import "./css/style.css";
import {renderStart} from "./js_component/renderScreenStart";
import {renderGame} from "./js_component/renderScreenGame";
import {stateCheck} from "./js_component/functions";

export const app: HTMLElement | null = document.querySelector(".app");
export const PAGE: string[] = ["Start", "Game", "Over"];

export function askStart() {
	if (localStorage.getItem("state")) {
		const state = localStorage.getItem("state");
		if (state === PAGE[0]) {
			return renderStart();
		}
		if (state === PAGE[1]) {
			return renderGame();
		}
	} else {
		return stateCheck("state", "Start");
	}
}

askStart();
