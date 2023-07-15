const { it, expect } = require("@jest/globals");
//import { it, expect }  from ("@jest/globals");
it("Проверяем получения значиний из локалсторедж", () => {
    let PAGE = ['Start', 'Game', 'Over'];
  
   let unit = require('./index');
  console.log(unit);
  
    expect(unit.toContainEqual(PAGE));
  });