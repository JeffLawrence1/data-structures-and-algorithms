'use strict';

function multiBracketValidation(input){
  if (typeof input !== 'string') return 'Not a valid string';

  let arr = input.split('');
  let compareArr = [];
  let refArr = ['(',')','[',']','{','}'];
  let l = arr.length;

  for(let i = 0; i < l; i++){
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
