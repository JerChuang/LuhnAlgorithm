const assert = require ("assert");
const checkLuhn = require("./Luhn");

describe("chechLuhn", function(){
  const validInput = ["79927398710", "79927398711", "79927398712", "79927398713", "79927398714", "79927398715", "79927398716", "79927398717", "79927398718", "79927398719"];


  for (let input of validInput){
    it("Should return true on valid numbers", function(){
      assert.equal(checkLuhn(input), true);
    })
  };
});








