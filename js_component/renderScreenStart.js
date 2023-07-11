import { app } from '../index.js'
import { unitCheck } from './functions.js'

export function renderStart() {
	const textStart = 'Выбери сложность'
	app.innerHTML = `
                      <div class="screen">  
                            <p class="title">${textStart}</p>
                            <div class="qual">

                   
                                <input type="radio" id="radio1" name="radios" value="1">
                                <label class="but one" for="radio1">1</label>
                                
                                <input type="radio" id="radio2" name="radios" value="2">
                                <label class="but two" for="radio2">2</label>
                                
                                <input type="radio" id="radio3" name="radios" value="3">
                                <label class="but free" for="radio3">3</label>
                  




                           
                            </div>
                            <button class="start" disabled="true">Старт</button>
                      </div>
                `
	clickAp()
}

export const clickAp = () => {
	let qual = ''
	const buttons = document.querySelectorAll('.but')
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', (e) => {
			for (let i = 0; i < buttons.length; i++) {
				buttons[i].classList.remove('active')
			}
			qual = e.target.textContent
			e.target.classList.add('active')
			document.querySelector('.start').removeAttribute('disabled')
		})
	}
	document.querySelector('.start').addEventListener('click', (e) => {
		unitCheck('qual', qual)
		unitCheck('unit', 'Game')
	})
}
