import Magician from '../Magician';

test('Creating a Magician Class', () => {
  const magician = new Magician('magician', 100, false, 2);
  const expected = {
    name: 'magician',
    realyAttack: 100,
    realyStoned: false,
    distance: 2,
  };
  expect(magician).toEqual(expected);
});
