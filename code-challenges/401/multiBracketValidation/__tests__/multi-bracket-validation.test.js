'use strict';

const bracketValidation = require('../multi-bracket-validation.js');

describe('Multi Bracket Validation', () => {

  let match = '(jf[df]sdf{ee})';
  let badMatch = '(jf[[df]sdf{ee})';

  it ('Should only take a string', () => {
    let result = bracketValidation({});

    expect(result).toEqual('Not a valid string');
  });

  it('Can successfully return true if brackets match', () => {

    expect(bracketValidation(match)).toBe(true);
  });

  it('Can successfully return false if brackets do not match', () => {

    expect(bracketValidation(badMatch)).toBe(false);
  });

  it ('Should return true if the brackets match', () => {
    let result = bracketValidation('(){}[]');

    expect(result).toEqual(true);
  });

  it ('Should return false if the brackets do not match', () => {
    let result = bracketValidation('()[}{]');

    expect(result).toEqual(false);
  });
});
