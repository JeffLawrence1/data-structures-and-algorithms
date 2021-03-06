'use strict';

function mergeLists(list1, list2){

  let current1 = list1.head;
  let current2 = list2.head;

  for(let i = 0; i <= list1.length; i++){
    if(current1.next === null){
      list1.insertAfter(current1.val, current2.val);
      // console.log(list1);
      break;
    }
    list1.insertAfter(current1.val, current2.val);
    current1 = current1.next.next;
    current2 = current2.next;
  }
  return list1.head;
}

module.exports = mergeLists;
