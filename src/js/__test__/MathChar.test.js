import Magician from '../Magician';

test('Creating a class', () => {
  const character = new Magician('Mag', 100, false, 2);
  const expected = {
    name: 'Mag',
    realyAttack: 100,
    realyStoned: false,
    distance: 2,
  };
  expect(character).toEqual(expected);
});

test('test of the get stoned method', () => {
  const character = new Magician('Mag', 100, false, 2);
  const expected = false;
  expect(character.stoned).toEqual(expected);
});

test('test of the set stoned method', () => {
  const character = new Magician('Mag', 100, false, 2);
  const expected = true;
  expect(character.stoned = true).toEqual(expected);
});

test('test the attack method when stoned = true', () => {
  const character = new Magician('Mag', 100, false, 2);
  character.stoned = true;
  const expected = 85;
  expect(character.attack).toBe(expected);
});

test('test the attack method when stoned = false', () => {
  const character = new Magician('Mag', 100, false, 2);
  const expected = 90;
  expect(character.attack).toBe(expected);
});
