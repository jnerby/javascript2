'use strict';

function wordsInCommon(words1, words2) {
  const words1Set = new Set(words1);
  const words2Set = new Set(words2);
  let result = new Set();
  
  for (const word of words1Set) {
    if (words2Set.has(word)) {
      result.add(word);
    }
  }
  return Array.from(result);
}


function kidsGame(names) {
  const output = [names.pop(0)];
  const firstLetterToWords = {};

  for (let name in names){
    // if first letter dictionary does not have a key with the first letter of name
    if (!firstLetterToWords.hasOwnProperty(name[0])){
      // create key with first letter of name, set value to array with name as first value
      firstLetterToWords[name[0]] = [name];
    }
    else {
      // if key already exists, add current name to existing value array
      firstLetterToWords[name[0]].push(name);
    }
  }

  while (true) {
    // let startLetter = output[-1][-1];
    let lastWord = output[output.length - 1]
    let startLetter = lastWord[lastWord.length - 1]
    // let startLetter = lastWord[0]

    if (!firstLetterToWords.hasOwnProperty(startLetter)) {
      break;
    }
    let word = firstLetterToWords[startLetter].pop(0);
    output.push(word);
  }
  return output;
}

let names = ["apple", "berry", "cherry"];
console.log(kidsGame(names));