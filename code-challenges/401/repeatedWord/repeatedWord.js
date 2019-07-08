'use strict';

const HashTable = require('../hashtable/hashtable');

function repeatedWord(string){
  let hashTable = new HashTable.HashTable(10);
  let tempArr = string.split('');
  let answer;
  let word;
  for(let i = 0; i < tempArr.length; i++){
    word = tempArr[i].replace(/\w+/g).toLowerCase();
    answer = hashTable.add(word, word);
    if(answer === 'key already being used'){
      return word;
    }
  }
  return 'no duplicates found';
}

console.log(repeatedWord('this is a very long sentence this to test'));