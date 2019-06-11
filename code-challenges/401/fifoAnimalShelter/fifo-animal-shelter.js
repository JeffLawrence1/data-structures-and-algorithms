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
  enqueue(name){
    let animal = new Animal(name);
    this.storage.push(animal);
    console.log(this.storage);
  }

  dequeue(pref){
    let temp;
    let result;
    if(pref === undefined){
      return this.storage.shift();
    }
    for(let i = 0; i < this.storage.length; i++){
      temp = this.storage.shift();
      if(temp.name === pref && temp.name !== result){
        result = temp;
      }else{
        this.storage.push(temp);
      }
    }
    return result;
  }

}

module.exports = AnimalShelter;
