'use strict';

// 1. countWords
function countWords(phrase) {
  const wordCounts = {}
  let words = phrase.split(" ")
  for (const word in words) {
    let newWord = words[word];
    if (wordCounts.hasOwnProperty(newWord)){
      wordCounts[newWord] += 1;
    } else {
      wordCounts[newWord] = 1;
    }
  } 
  return wordCounts
}
// let phrase = "hey hey hi"
// console.log(countWords(phrase))


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };
  for (const key in melonPrices){
    if (Number(key) === Number(price)){
      return melonPrices[key];
    }
  }
  return null;
}

console.log(getMelonsAtPrice(2.95))