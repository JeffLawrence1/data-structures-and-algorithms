'use strict';

const AnimalShelter = require('../fifo-animal-shelter.js');

describe('Animal Shelter', () => {

  let newShelter;
  console.log(newShelter);

  beforeEach(() => {
    newShelter = new AnimalShelter();
  });

  describe('constructor', () => {

    it('Can successfully instantiate an instance of AnimalShelter', () => {
      expect(newShelter).toBeDefined();
      expect(newShelter).toBeInstanceOf(AnimalShelter);
    });

    it('Should create an empty storage', () => {
      expect(newShelter.storage).toBeDefined();
      expect(newShelter.storage).toBeInstanceOf(Array);
    });
  });

  describe('enqueue', () => {

    it('Can properly enqueue into the shelter', () => {
      newShelter.enqueue('cat');
      expect(newShelter.storage[0].name).toEqual('cat');
      expect(newShelter.storage.length).toEqual(1);
    });

    it('Should not add an animal if no value is provided', () => {
      expect(newShelter.storage).toBeDefined();
      expect(newShelter.storage).toBeInstanceOf(Array);
      expect(newShelter.storage.length).toEqual(0);
    });

    it('Should return must be cat or dog if the name input is something else', () => {
      expect(newShelter.enqueue('rabbit')).toEqual('must be cat or dog');
    });
  });

  describe('dequeue', () => {

    it('Should remove the oldest specified animal from the queue', () => {
      newShelter.enqueue('cat');
      newShelter.enqueue('dog');
      newShelter.enqueue('cat');
      let popped = newShelter.dequeue('dog');
      expect(popped).toEqual({name:'dog'});
      expect(newShelter).toBeDefined();
      expect(newShelter).toBeInstanceOf(AnimalShelter);
      expect(newShelter.storage.length).toEqual(2);
    });

    it('Should not remove any other animal', () => {
      newShelter.enqueue('cat');
      newShelter.enqueue('dog');
      newShelter.enqueue('cat');
      newShelter.dequeue('dog');
      expect(newShelter.storage[0].name).toEqual('cat');
      expect(newShelter.storage[1].name).toEqual('cat');
    });

    it('Should return undefined if no parameter given', () => {
      expect(newShelter.dequeue()).toBeUndefined();
    });
  });
});
