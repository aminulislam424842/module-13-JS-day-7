function oddNumber (n) {
  let odd =[];
  let i=1;
  while (i <n){
    if (i%2!==0){
      odd.push(i);
    }
    i++;
  }
  return odd;
}
console.log(oddNumber(10));
