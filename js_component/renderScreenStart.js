import { app } from "../index.js";
import { unitCheck } from "./functions.js";
export function renderStart() {
      const textStart = 'Выбери сложность';
      app.innerHTML = `
                      <div class="screen">  
                            <p class="title">${textStart}</p>
                            <div class="qual">
                            <div class="but one">1</div>
                            <div class="but two">2</div>
                            <div class="but free">3</div>
                            </div>
                            <button class="start" disabled="true">Старт</button>
                      </div>
                `;
      clickAp();
}

export const clickAp = () => {
      let qual = '';
      const buttons = document.querySelectorAll('.but');
      for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', (e) => {
                  for (let i = 0; i < buttons.length; i++) {
                        buttons[i].classList.remove('active');
                  }
                  qual = e.target.textContent;
                  e.target.classList.add('active');
                  document.querySelector('.start').removeAttribute("disabled");
            });
      }
            document.querySelector('.start').addEventListener('click', (e) => {
                  unitCheck('qual', qual);
                  unitCheck('unit', 'Game');
            });
}



