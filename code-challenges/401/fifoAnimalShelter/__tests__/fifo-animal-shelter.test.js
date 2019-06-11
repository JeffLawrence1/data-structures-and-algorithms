'use strict';

const AnimalShelter = require('../fifo-animal-shelter.js');

describe('Animal Shelter', () => {

  let newShelter;
  console.log(newShelter);

  beforeEach(() => {
    newShelter = new AnimalShelter();
  });

  it('Can successfully instantiate an empty shelter', () => {

    expect(newShelter).toBeDefined();
  });

  it('Can properly enqueue into the shelter', () => {
    newShelter.enqueue('cat');

    expect(newShelter.storage[0].name).toEqual('cat');
  });


});

