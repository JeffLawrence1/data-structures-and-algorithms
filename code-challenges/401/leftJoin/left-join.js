'use strict';

const HashTable = require('../hashtable/hashtable');

function leftJoin(hash1, hash2){
  let answerArr = [];
  let key;
  let hash1Val;
  let hash2Val;
  let tempArr = [];
  for(let i = 0; i < hash1.buckets.length; i++){
    tempArr = hash1.buckets[i].values();
    for(let j = 0; j < hash1.buckets[i].length; j++){
      key = tempArr[j][0];
      hash1Val = hash1.get(key);
      try{
        hash2Val = hash2.get(key);
      }catch(e){
        console.log('no key for hash2');
        hash2Val = null;
      }
      answerArr.push([key, hash1Val, hash2Val]);
    }
  }
  return answerArr;
}
