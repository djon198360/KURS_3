import { app } from '../index';
import { unitCheck } from './functions';
import { renderOver } from './renderScreenOver';

const pause = 5 * 1000;

export let timer;

const CARDDECK = [6, 7, 8, 9, 10, 'j', 'q', 'k', 'a'];
const mast = ['pic', 'kres', 'bub', 'her'];

let seconds: number = 0;
let minutes: number = 0;

export function renderGame() {
	clearInterval(timer);
	(app as Element).innerHTML = `
             <div class="header">
                  <div class="timer"><div class="timer_header"><span class="min">min</span><span class="sek">sek</span></div><span class="time">00.00</span></div>
                  <button class="restart"> Начать заново</button>
            </div>
            <div class="card_table">
            </div>
                `;

	const cards: Element | null = document.querySelector('.card_table');
	(cards as HTMLElement).append(getListContent());
	const cardTable: HTMLElement | null = document.querySelector('.card_table');
	(cards as HTMLElement).style.pointerEvents = ' none;';
	const elements = Array.from(document.querySelectorAll('.card_card'));

	let cardInDom = Array.from(document.querySelectorAll('.card'));
	// вызываем функцию по клику на .card
	let temp;
	for (let card of cardInDom) {
		;(card as HTMLElement).onclick = () => {
			if (card.classList.contains('open')) return;
			let cardValue: string | null = card.getAttribute('data-number');
			card.children[0].classList.remove('close');
			if (temp && temp != card) {
				if (temp.getAttribute('data-number') === cardValue) {
					temp.classList.remove('close');
					card.classList.remove('close');
					let mov = JSON.parse(
						localStorage.getItem('moves') as string
					);
					mov++;
					localStorage.setItem('moves', JSON.stringify(mov));
					if (document.querySelectorAll('.close').length <= 0) {
						renderOver('Вы выиграли', 'victory', minutes, seconds);
						clearInterval(timer);
						seconds = 0;
						minutes = 0;
					}

					(temp as string) = '';
				} else {
					renderOver('Вы проиграли', 'over', minutes, seconds);
					clearInterval(timer);
					seconds = 0;
					minutes = 0;
					return ((cards as HTMLElement).style.pointerEvents =' none');

				}
			} else temp = card;
		}
	}

	for (let elem of elements) {
		setTimeout(function () {
			(elem as Element).classList.add('close');
			(cards as HTMLElement).style.pointerEvents = 'unset';
		}, pause)
	}

	timer = setInterval(updateSeconds, 1000);
	const restart: HTMLElement | null = document.querySelector('.restart');
	(restart as HTMLElement).addEventListener('click', (e) => {

		clearInterval(timer);
		seconds = 0;
		minutes = 0;
		unitCheck('unit', 'Game');
		renderGame();
	})
}

const genCardDiv = (newArr) => {
	let fragment = new DocumentFragment();
	newArr.sort(() => Math.random() - 0.5);
	for (let i = 0; i < newArr.length; i++) {
		let carda = document.createElement('div');
		let fon = document.createElement('img');
		carda.classList.add('card');
		carda.dataset.number = newArr[i];
		fon.setAttribute('src', 'img/' + newArr[i] + '.svg');
		fon.classList.add('card_card');
		carda.appendChild(fon);
		fragment.append(carda);
	}
	return fragment;
}

const getListContent = () => {
	let newArr = new Array();
	let qual: string | null = localStorage.getItem('qual');
	let result = 6 * Number(qual);
	for (let i = 0; i < result / 2; i++) {
		let y = Math.floor(Math.random() * CARDDECK.length);
		let z = Math.floor(Math.random() * mast.length);
		newArr.push(CARDDECK[y] + mast[z], CARDDECK[y] + mast[z]);
		//	newArr.push(CARDDECK[y] + mast[z])
	}
	newArr.sort(() => Math.random() - 0.5);
	return genCardDiv(newArr);
}

function updateSeconds() {
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
	;(spendTime as HTMLElement).textContent = `${minutes
		.toString().padStart(2, '0')}.${seconds.toString().padStart(2, '0')}`;
}