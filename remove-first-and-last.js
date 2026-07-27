function removeFirstAndLast(str) {
  let remove = str.slice(1, str.length - 1);
  return remove;
}
console.log(removeFirstAndLast("hello"));