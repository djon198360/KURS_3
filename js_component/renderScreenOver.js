import { app } from "../index.js";

export function renderOver() {
    const textStart = 'Результат';
    app.innerHTML = `
                      <div class="screen">  
                            <p class="title">${textStart}</p>
                      </div>
                `;

}