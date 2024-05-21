import Daemon from '../Daemon';

test('Creating a Daemon Class', () => {
  const daemon = new Daemon('daemon', 100, false, 2);
  const expected = {
    name: 'daemon',
    realyAttack: 100,
    realyStoned: false,
    distance: 2,
  };
  expect(daemon).toEqual(expected);
});
