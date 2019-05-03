const assert = require ("assert");
const checkLuhn = require("./Luhn");

describe("chechLuhn", function(){
  const validInput = ["79927398713"];


  for (let input of validInput){
    it("Should return true on valid numbers", function(){
      assert.equal(checkLuhn(input), true);
    })
  };
});

describe("chechLuhn", function(){
  const validInput = ["79927398711", "79927398712", "79927391713", "79927398714", "79927398715", "1234432128", "79927398732", "7992739872", "79927398208", "79927398710"];


  for (let input of validInput){
    it("Should return false on valid numbers", function(){
      assert.equal(checkLuhn(input), false);
    })
  };
});


function luhn_check(value) {

    var output =  value.split('')
        .reverse()
        .map( (x) => parseInt(x) )
        .map( (x,idx) => idx % 2 ? x * 2 : x )
        .map( (x) => x > 9 ? (x % 10) + 1 : x )
        .reduce( (accum, x) => accum += x ) % 10 === 0;
    console.log(output);
    return output;

}