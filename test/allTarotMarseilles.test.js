import {
  expect,
  test,
} from 'vitest'

import {
  getCardFor,
  getCardKeyForTitle,
  getPotentialMatchesFor,
} from '../src/pages/allTarotMarseilles'

test('should get card by name', () => {
  // KEY 19 is The Sun
  const thaCard = getCardFor(getCardKeyForTitle('The Sun'))
  expect(thaCard).toBeDefined()
  expect(thaCard.sign).toBeDefined()
  expect(thaCard.sign).toStrictEqual('Leo')
})

test('something', () => {
  expect(getPotentialMatchesFor('The Sun')).toBe('The Star')
  expect(getPotentialMatchesFor('The Tower')).toContain('The Hermit')
  expect(getPotentialMatchesFor('Tower')).toContain('Emperor')
  expect(getPotentialMatchesFor('Emperor')).toContain('Le Mat')
  expect(getPotentialMatchesFor('Chariot')).toContain('Devil')
})
