
import './css/style.css';
export const app: HTMLElement | null = document.querySelector('.app');
export const PAGE:string[] = ['Start', 'Game', 'Over'];
import { renderStart } from './js_component/renderScreenStart';
import { renderGame } from './js_component/renderScreenGame';
import { unitCheck } from './js_component/functions';
//let unit:string|null = localStorage.getItem('unit');

export function start() {
	if (localStorage.getItem('unit')) {
		let unit = localStorage.getItem('unit');
		if (unit === PAGE[0]) {
			return renderStart();
		}
		if (unit === PAGE[1]) {
			return renderGame();
		}
	} else {
		return unitCheck('unit', 'Start');
	}
}

start();
//module.exports = localStorage.getItem('unit');