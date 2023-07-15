import { start } from '../index'
export let seconds: number = 0;
export let minutes: number = 0;
let time = '';
let timer;

export function unitCheck(unit:string, param:string) {
	localStorage.setItem(unit, param)
	return start()
}
export const clearTime = () => {
	clearInterval(timer);
	seconds = 0;
	minutes = 0;	
	time = 'stop';
	return seconds || minutes;
}
export const startTime = () => {
	timer = setInterval(updateSeconds, 1000);
	seconds = 0;
	minutes = 0;	
	time = "start";
	
}

export function updateSeconds() {
if(time ==="stop"){
	seconds = 0;
	minutes = 0;	
	
} 
if(document.querySelector('.time')){
	let spendTime: HTMLElement | null = document.querySelector('.time')
	seconds += 1;
	if (seconds > 59) {
		seconds = 0;
		minutes += 1;
	}

	if (minutes > 59) {
		minutes = 0;
		//hours += 1
	}
	
	if( (spendTime as HTMLElement).textContent ) {(spendTime as HTMLElement).textContent = `${minutes
		.toString().padStart(2, '0')}.${seconds.toString().padStart(2, '0')}`};
		}
}
