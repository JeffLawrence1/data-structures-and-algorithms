function insertShiftArray(arr, val){
  let arrLength = arr.length;
  let newArr = [];
  if(arrLength %2 === 0){
    for(let i = 0; i < arrLength + 1; i++){
      if(i === arrLength / 2){
        newArr[i] = val;
      }else if(i < arrLength / 2){
        newArr[i] = arr[i];
      }else{
        newArr[i] = arr[i - 1];
      }
    }
  }else{
    for(let i = 0; i < arrLength + 1; i++){
      if(i === (arrLength +1) / 2){
        newArr[i] = val;
      }else if(i < (arrLength + 1) / 2){
        newArr[i] = arr[i];
      }else{
        newArr[i] = arr[i - 1];
      }
    }
  }
  return newArr;
}
