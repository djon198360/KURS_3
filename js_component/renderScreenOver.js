import { app } from "../index.js";
import { unitCheck } from "./functions.js";
import { timer } from "./renderScreenGame.js";
function gameOver(text) {
      let fragment = new DocumentFragment();
      let screen = document.createElement("div");
      screen.classList.add('screen');
      let p = document.createElement("p");
      p.classList.add('title');
      p.textContent = text;
      let button = document.createElement("button");
      button.textContent = "Начать заново";
button.classList.add('start');
      screen.appendChild(p);
      screen.appendChild(button);
      fragment.append(screen);

      return fragment;
}
/*                      <div class="screen">  
                            <p class="title">${textStart}</p>
                            <div class="qual">
                            <div class="but one">1</div>
                            <div class="but two">2</div>
                            <div class="but free">3</div>
                            </div>
                            <button class="start" disabled="true">Старт</button>
                      </div>
*/ 

export function renderOver(text) {
    

app.append(gameOver(text));
clearTimeout(timer);
document.querySelector('.start').addEventListener('click', (e) => {
      localStorage.clear();
      unitCheck('unit', 'Start');
});


}