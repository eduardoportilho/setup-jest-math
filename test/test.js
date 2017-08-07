const sum = require('../sum')

test('sums 2 numbers', () => {
  const result = sum(1, 2)
  expect(result).toBe(3)
})
