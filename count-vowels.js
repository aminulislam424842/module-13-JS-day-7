function countVowels(str) {

  let count = 0;
  let vowel = "aeiou"
  let word = str.toLowerCase();

  for (let i = 0; i < word.length; i++) {

    // if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u" ) {
    //   count ++;
    // }

    if (vowel.includes(word[i])) {
      count++;
    }

  }

  return count;

}

console.log(countVowels("Aminul"));
console.log(countVowels("Javascript"));
console.log(countVowels("Aminul Islam Mahi.Rajshahi Polytechnic institute"));