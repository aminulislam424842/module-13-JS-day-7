function temperature(temp){
  if (temp>=30){
    return "Hot";
  }
  else if (temp<=15){
    return "Cold";
  }
  else {
    return "Normal";
  }
}
console.log(temperature(40));
console.log(temperature(25));
console.log(temperature(14));