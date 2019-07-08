'use strict';

const HashTable = require('../hashtable/hashtable');

function repeatedWord(string){

  if(typeof string !== 'string'){
    throw new Error('not a string');
  }
  let hashTable = new HashTable.HashTable(10);
  let tempArr = string.split(' ');
  let answer;
  let word;
  for(let i = 0; i < tempArr.length; i++){
    word = tempArr[i].replace(/([^\s\w])/g, '').toLowerCase();
    answer = hashTable.add(word, 1);
    if(answer === 'key already being used'){
      return word;
    }
  }
  return 'no duplicates found';
}

module.exports = repeatedWord;

