// way-1


function reverseNumbers (num) {
  let str =num.toString();
  let reverse =str.split("").reverse().join("");
  return Number(reverse);
}

console.log(reverseNumbers(1234)); 
console.log(reverseNumbers(7)); 


// way-2

function reverseNum(num) {
  let reverseStr = num.toString();
  let reversesNum ="";

  for (let i = reverseStr.length-1; i>=0;i--){
    reversesNum+=reverseStr[i];
  }
  return Number(reversesNum);
}
console.log(reverseNum(12345678));
console.log(reverseNum(7)); 