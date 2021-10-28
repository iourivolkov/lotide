const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
  } else if (actual !== expected) {
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
// For example, countLetters('LHL') should return results indicating that L appears twice, and H once.
const countLetters = (sentence) => {

  for(let i = 0; i < sentence.length; i++){
    console.log(sentence[i]);

  }


};

const word = "irrelevant";

console.log(countLetters(word));

