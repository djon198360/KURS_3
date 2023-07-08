export const app = document.querySelector('.app')
const PAGE = ['Start', 'Game', 'Over'];

import { renderStart} from "./js_component/renderScreenStart.js";
import { renderGame } from "./js_component/renderScreenGame.js";
import { renderOver } from "./js_component/renderScreenOver.js";
import { unitCheck } from "./js_component/functions.js";

export function start() {
      if (localStorage.getItem('unit')) {
            let unit = localStorage.getItem('unit');
            if(unit === PAGE[0]) {
                return  renderStart();
            }
            if(unit === PAGE[1]) {
                return  renderGame();
            }
            if(unit === PAGE[2]) {
                return  renderOver();
            }
      }
      else {
            return  unitCheck('unit','Start');
        }
}

      start();