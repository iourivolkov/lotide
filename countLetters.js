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
  const results = {};

  for(let char of sentence){
    if(results[char]){
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }
return results;
};


