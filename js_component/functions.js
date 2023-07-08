import {start} from "../index.js"


export function unitCheck(unit,param) {
    localStorage.setItem(unit, param);
    start();
}