function reverseArray(arr) {
  let reverseArr = [];
  console.log(arr);
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }
  return reverseArr;
}

function reverseArrayInPlace(arr) {
  // console.log(arr);
  // for (let i = arr.length - 1; i >= 0; i--) {
  //   arr.push(arr[i]);
  // }
  // for (let index = 0; index < arr.length; index++) {
  //   arr.pop(arr.length/2, arr.length-1)
    
  // }
  // return arr;

  // 1 2 3 4 5
  // 5 4 3 2 1

  let a, z;
  for(let i = 0; i < ( arr.length / 2 ); i++){
    a = arr[i];
    z = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = a;
    arr[i] = z;
  }
  return arr

}






// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
arrayValue = reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]