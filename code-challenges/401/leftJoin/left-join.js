'use strict';

const HashTable = require('../hashtable/hashtable');

function leftJoin(hash1, hash2){
  let answerArr = [];
  let key;
  let hash1Val;
  let hash2Val;
  let tempArr = [];
  for(let i = 0; i < hash1.buckets.length; i++){
    // console.log(hash1.buckets[i]);
    if(hash1.buckets[i] !== undefined){
      tempArr = hash1.buckets[i].values();
      // console.log(tempArr);
      // console.log(hash1.buckets.length);
      for(let j = 0; j < tempArr.length; j++){
      //   console.log(tempArr);
        key = tempArr[j][0];
        hash1Val = hash1.get(key);
        console.log(key);
        hash2Val = hash2.get(key);
        console.log(hash2Val);
        if(hash2Val === undefined){
          console.log('no key for hash2');
          hash2Val = null;
        }
        answerArr.push([key, hash1Val, hash2Val]);
      }
    }
  }
  return answerArr;
}

let hasher1 = new HashTable.HashTable(10);
hasher1.add('cat', 1);
hasher1.add('dog', 12);
hasher1.add('tacocat', 13);
hasher1.add('doggo', 14);
hasher1.add('doggo2', 144);

let hasher2 = new HashTable.HashTable(10);
hasher2.add('cat', 1);
hasher2.add('dog', 122);
hasher2.add('tacocat', 133);
hasher2.add('doggo', 144);


console.log(leftJoin(hasher1, hasher2));
