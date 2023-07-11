
export const app: Element | null = document.querySelector('.app');
const PAGE:string[] = ['Start', 'Game', 'Over'];
import './css/style.css';
import { renderStart } from './js_component/renderScreenStart';
import { renderGame } from './js_component/renderScreenGame';
import { renderOver } from './js_component/renderScreenOver';
import { unitCheck } from './js_component/functions';



export function start() {
	if (localStorage.getItem('unit')) {
		let unit = localStorage.getItem('unit')
		if (unit === PAGE[0]) {
			return renderStart()
		}
		if (unit === PAGE[1]) {
			return renderGame()
		}
/* 		if (unit === PAGE[2]) {
			return renderOver()
		} */
	} else {
		return unitCheck('unit', 'Start')
	}
}

start();
