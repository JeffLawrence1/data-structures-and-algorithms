//Worked with Felipe and Mike


function reverseArray(arr){
  let counter = 0;
  let tempArr = [];
  for(let i = arr.length-1; i >= 0; i--){
    tempArr[counter] = arr[i];
    counter++;
  }
  console.log(counter);
  console.log(tempArr);
  return tempArr;
}
console.log(reverseArray([5, 6, 7, 8, 9]));
