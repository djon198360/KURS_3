import { app } from "../index.js";

export function renderGame() {
    const textStart = 'Вы в игре';
    app.innerHTML = `
                      <div class="screen">  
                            <p class="title">${textStart}</p>
                            
                      </div>
                `;
 
}