'use strict';

class Animal{
  constructor(name){
    if(name !== 'cat' || name !== 'dog'){
      return 'must be cat or dog';
    }
    this.name = name;
  }
}
class AnimalShelter{
  constructor(){
    this.storage = [];
  }


}

module.exports = AnimalShelter;
