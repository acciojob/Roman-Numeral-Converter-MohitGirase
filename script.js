function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let result = "";

  for (let i = 0; i < 7; i++) {
    let [symbol, value] = obj[i];

    if (i % 2 === 0 && i < 6) {
      let nextValue = obj[i + 2][1];
      let nextSymbol = obj[i + 2][0];

      if (num >= value - nextValue) {
        result += nextSymbol + symbol;
        num -= value - nextValue;
      }
    }

    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
