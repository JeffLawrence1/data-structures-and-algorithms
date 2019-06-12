'use strict';

function multiBracketValidation(input){

  let arr = input.split('');
  let compareArr = [];
  let refArr = ['(',')','[',']','{','}'];

  for(let i = 0; i < arr.length; i++){
    let shift = arr.shift();
    if(refArr.includes(shift)){
      if(shift === '(' || shift === '[' || shift === '{'){
        compareArr.push(shift);
      }else{
        if(shift === ')' && compareArr.pop() !== '('){
          return false;
        }else if(shift === ']' && compareArr.pop() !== '['){
          return false;
        }else if(shift === '}' && compareArr.pop() !== '{'){
          return false;
        }
      }
    }
  }
  return arr.length === 0;
}

module.exports = multiBracketValidation;
