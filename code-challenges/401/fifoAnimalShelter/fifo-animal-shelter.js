'use strict';

class Animal{
  constructor(name){
    this.name = name;
  }
}

class AnimalShelter{
  constructor(){
    this.storage = [];
  }
  enqueue(name){
    if(name === 'cat' || name === 'dog'){
      let animal = new Animal(name);
      this.storage.push(animal);
    }else{
      return 'must be cat or dog';
    }
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
