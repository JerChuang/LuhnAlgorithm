const assert = require ("assert");
const checkLuhn = require("./Luhn");

describe("chechLuhn", function(){
  const validInput = [79927398710];


  for (let input of validInput){
    it("Should return true on valid numbers", function(){
      assert.equal(checkLuhn(input) === true);
    })
  };
});








