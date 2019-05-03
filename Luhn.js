function checkLuhn(numbers) {
//reverse the numbers
  var reverseNumbers = numbers
          .split("")
          .reverse()
          .map(Number);
//double the value of every 2nd digit
  const doubleEvenIndices = reverseNumbers.map(function (num, index){
    if((index) % 2 !== 0){
      return num;
    }
    if (num * 2 > 9){
      var digits = String(num*2)
        .split("")
        .map(Number)
        .reduce((acc, num) => (acc+num), 0);
      return digits;
    }

    return num * 2;
  });


  var sum = doubleEvenIndices.reduce((acc, num) => acc+num, 0);





  return !((sum + (sum*9)%10)%10);
}

module.exports = checkLuhn;


console.log(checkLuhn("7992739871"));