const { it, expect } = require("@jest/globals");

it("Проверяем получения значиний из локалсторедж", () => {
    let PAGE = require('./index');
  
   let unit = require('./index');
  console.log(unit);
  
    expect(unit.toContainEqual(PAGE));
  });