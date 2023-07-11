import { app } from '../index.js'
import { unitCheck } from './functions.js'
import { renderOver } from './renderScreenOver.js'

//
const pause = 5 * 1000
//let result = 6 * qual;
//let seconds = 0;
//let minutes = 0;

export let timer

//clearTimeout(timer);

const CARDDECK = [6, 7, 8, 9, 10, 'j', 'q', 'k', 'a']
const mast = ['pic', 'kres', 'bub', 'her']

let seconds = 0
let minutes = 0

export function renderGame() {
	clearTimeout(timer)
	clearInterval(timer)
	const textStart = 'Вы в игре'
	app.innerHTML = `
             <div class="header">
                  <div class="timer"><div class="timer_header"><span class="min">min</span><span class="sek">sek</span></div><span class="time">00.00</span></div>
                  <button class="restart"> Начать заново</button>
            </div>
            <div class="card_table">
            </div>
                `

	const cards = document.querySelector('.card_table')
	cards.append(getListContent()) // (*)
	document.querySelector('.card_table').style = 'pointer-events: none;'
	const elements = document.querySelectorAll('.card_card')

	let cardInDom = document.querySelectorAll('.card')
	// вызываем функцию по клику на .card и показываем цифру
	let temp
	for (let card of cardInDom) {
		card.onclick = () => {
			if (card.classList.contains('open')) return
			let cardValue = card.dataset.number
			card.children[0].classList.remove('close')
			if (temp && temp != card) {
				if (temp.dataset.number === cardValue) {
					temp.classList.remove('close')
					card.classList.remove('close')

					localStorage.setItem(
						'moves',
						Number(localStorage.getItem('moves')) + 1,
					)
					if (document.querySelectorAll('.close').length <= 0) {
						renderOver('Вы выиграли', 'victory', minutes, seconds)
						clearInterval(timer, (minutes = 0), (seconds = 0))
					}

					temp = null
				} else {
					renderOver('Вы проиграли', 'over', minutes, seconds)
					clearInterval(timer, (minutes = 0), (seconds = 0))
					return (document.querySelector('.card_table').style =
						'pointer-events: none;')
					//  temp.children[0].classList.add("close");
					//  temp = card;
				}
			} else temp = card
		}
	}

	for (let elem of elements) {
		setTimeout(function () {
			elem.classList.add('close')
			document.querySelector('.card_table').style =
				'pointer-events: unset;'
		}, pause)
	}

	timer = setInterval(updateSeconds, 1000)

	document.querySelector('.restart').addEventListener('click', (e) => {
		// unitCheck('qual', qual);
		clearInterval(timer, (minutes = 0), (seconds = 0))

		unitCheck('unit', 'Game')
		renderGame()
	})
}

const genCardDiv = (newArr) => {
	let fragment = new DocumentFragment()
	newArr.sort(() => Math.random() - 0.5)
	for (let i = 0; i < newArr.length; i++) {
		let carda = document.createElement('div')
		let fon = document.createElement('img')
		carda.classList.add('card')
		carda.dataset.number = newArr[i]
		fon.setAttribute('src', 'img/' + newArr[i] + '.svg')
		fon.classList.add('card_card')
		carda.appendChild(fon)
		fragment.append(carda)
	}

	return fragment
}

const getListContent = () => {
	let newArr = new Array()
	let qual = localStorage.getItem('qual')
	let result = 6 * qual
	for (let i = 0; i < result / 2; i++) {
		let y = Math.floor(Math.random() * CARDDECK.length)
		let z = Math.floor(Math.random() * mast.length)
		newArr.push(CARDDECK[y] + mast[z])
		newArr.push(CARDDECK[y] + mast[z])
	}
	newArr.sort(() => Math.random() - 0.5)
	return genCardDiv(newArr)
}

function updateSeconds() {
	let spendTime = document.querySelector('.time')
	seconds += 1
	if (seconds > 59) {
		seconds = 0
		minutes += 1
	}

	if (minutes > 59) {
		minutes = 0
		hours += 1
	}

	spendTime.textContent = `${minutes.toString().padStart(2, '0')}.${seconds
		.toString()
		.padStart(2, '0')}`
}
