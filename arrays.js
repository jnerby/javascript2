'use strict';

// 1. printIndices
function printIndices(items) {
  // 
  for (const i in items) {
    console.log(`${items[i]}  ${i}`)
  }
}



// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  const result = []
  for (let i = 0; i < items.length; i += 1){
    if (i % 2 == 0) {
      result.push(items[i]);
    }
  } 
  console.log(result)
}

// array.sort(function(a, b){return b - a});
// array.splice(i, 1);
// 3. smallestNItems
function smallestNItems(items, n) {
  items.sort((a, b) => b - a);
  let sliceStart = items.length - n
  const result = items.slice(sliceStart);
  console.log(result);
}


// const items = [3, 1, 2, 5, 6, 8, 0, 9];
// smallestNItems(items, 4)

// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
// }
// for (init; conditional; exp)