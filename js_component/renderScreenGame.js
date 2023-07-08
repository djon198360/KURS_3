import { app } from "../index.js";
import { unitCheck } from "./functions.js";
const qual = localStorage.getItem('qual');
const pause = 5 * 1000;
let result = 6 * qual;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;
let newArr = new Array();

const CARDDECK = [6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const mast = ['pic','kres','bub','her']



export function renderGame() {
      const textStart = 'Вы в игре';
      app.innerHTML = `
             <div class="header">
                  <div class="timer"><div class="timer_header"><span class="min">min</span><span class="sek">sek</span></div><span class="time">00.00</span></div>
                  <button class="restart"> Начать заново</button>
            </div>
            <div class="card_table">
            </div>
                `;
      
      const cards = document.querySelector('.card_table');
      cards.append(getListContent()); // (*)
      
      const elements = document.querySelectorAll('.card_card');
      

      timer = setInterval(updateSeconds, 1000);
      let cardInDom = document.querySelectorAll(".card");
      // вызываем функцию по клику на .card и показываем цифру
      let temp;
      for (let card of cardInDom) {
            card.onclick = () => {
                  if (card.classList.contains("open")) return;
                  let cardValue = card.dataset.number;
                  card.children[0].classList.remove('close');
                  if (temp && temp != card) {
                        if (temp.dataset.number === cardValue) {
                              temp.classList.remove("close");
                              card.classList.remove("close");

                               localStorage.setItem('moves',Number(localStorage.getItem('moves'))+1);
                              if(document.querySelectorAll(".close").length <= 0){alert('Вы победили')}

                              temp = null;
                        } else {
                             // alert('Вы проиграли');

                              clearTimeout(timer);
                           return   document.querySelector(".card_table").style = 'pointer-events: none;';
                            //  temp.children[0].classList.add("close");
                            //  temp = card;
                        }
                  } else temp = card;
            };
      };

      for (let elem of elements) {
            setTimeout(function () {
                  elem.classList.add('close');
            }, pause);
      }
     
   //  updateSeconds();
}


function genCardDiv(fragment, newArr) {
      for (let i = 0; i < result; i++) {

            let carda = document.createElement("div");
            let fon = document.createElement("img");
            carda.classList.add('card');
            carda.dataset.number = newArr[i];
            fon.setAttribute('src', 'img/' + newArr[i] + '.svg');
            fon.classList.add('card_card');
            carda.appendChild(fon);
            fragment.append(carda);
      }

      return fragment;
}

function getListContent() {

      let fragment = new DocumentFragment();
      for (let i = 0; i < result / 2; i++) {
            let y = Math.floor(Math.random() * CARDDECK.length);
            let z = Math.floor(Math.random() * mast.length);
            newArr.push(CARDDECK[y]+mast[z]);
            newArr.push(CARDDECK[y]+mast[z]);
      }
      newArr.sort(() => Math.random() - 0.5);
      return genCardDiv(fragment, newArr);

}

function updateSeconds() {
     
      let spendTime = document.querySelector(".time");
      seconds += 1;
      if (seconds > 59) {
            seconds = 0;
            minutes += 1
      }

      if (minutes > 59) {
            minutes = 0;
            hours += 1;
      }

      spendTime.textContent = `${minutes.toString().padStart(2, '0')}.${seconds.toString().padStart(2, '0')}`;
}



