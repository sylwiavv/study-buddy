const sum = (a, b) => a + b;

const users = [
  'mama', 'tata', 'kacper'
];

it('my test', () => {
  expect(sum(1, 2)).not.toEqual(5);
  expect(users).toContain('tata');
  expect(users).not.toContain('seba');
});