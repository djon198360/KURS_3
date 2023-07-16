
/**
 * @jest-environment jsdom
 */
const {PAGE} = require('./index');
const { it, expect,describe } = require("@jest/globals");
//import { it, expect }  from ("@jest/globals");
/*  it("Проверяем получения значиний из локалсторедж", () => {
   const sum = require('./sum');
    expect(sum(2,3)).toBe(10);
  });  */
    describe('test game' ,() =>{
      describe('test index page',() =>{
        it("бесполезная проверка", () => {

          const unit = require('./index');
          
          expect(PAGE).toEqual(unit.PAGE);
        }); 
      });
    });