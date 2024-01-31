function range(start, end, step = 1) {
  let numList = [];
  
  if (end<start) {
    while (end <= start) {
      numList.push(start);
      start = start + step;
    }
  } else {
    while (end >= start) {
      numList.push(start);
      start = start + step;
    }
  }

return(numList);
}


function sum(numbers) {
  // Add code.
}






// tests
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
