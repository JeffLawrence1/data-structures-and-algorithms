'use strict';

const HashTable = require('../hashtable/hashtable');

function repeatedWord(string){
  let hashTable = new HashTable.HashTable(10);
  let tempArr = string.split(' ');
  let answer;
  let word;
  for(let i = 0; i < tempArr.length; i++){
    // console.log(tempArr[i]);
    word = tempArr[i].replace(/([^\s\w])/g, '').toLowerCase();
    // console.log(word);
    answer = hashTable.add(word, 1);
    // console.log(answer);
    if(answer === 'key already being used'){
      return word;
    }
  }
  return 'no duplicates found';
}

console.log(repeatedWord('this, is a ve,ry long sente,nce this! to test'));
