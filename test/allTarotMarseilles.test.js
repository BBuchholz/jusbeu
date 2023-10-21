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
  const thaCard = getCardFor(getCardKeyForTitle('The Sun'))
  expect(thaCard).toBeDefined()
  expect(thaCard.sign).toBeDefined()
  expect(thaCard.sign).toStrictEqual('Leo')
})

test('Le Mat', () => {
  // By Modality, Cardinals (should be 4 expectations)
  expect(getPotentialMatchesFor('Le Mat'))
    .toContain('Emperor')
  expect(getPotentialMatchesFor('Le Mat'))
    .toContain('Empress')
  expect(getPotentialMatchesFor('Le Mat'))
    .toContain('Pope')
  expect(getPotentialMatchesFor('Le Mat'))
    .toContain('Popess')

  // By Element, Fire (should be 3 expectations)
  expect(getPotentialMatchesFor('Le Mat'))
    .toContain('Emperor')
  expect(getPotentialMatchesFor('Le Mat'))
    .toContain('Force')
  expect(getPotentialMatchesFor('Le Mat'))
    .toContain('Star')

  // By Planet/Sign (none for this card in ToM Configuration)
})

test('Chariot', () => {
  // By Modality, FIXED (should be 4 expectations)
  expect(getPotentialMatchesFor('Chariot'))
    .toContain('Devil')
  expect(getPotentialMatchesFor('Chariot'))
    .toContain('Star')
  expect(getPotentialMatchesFor('Chariot'))
    .toContain('Hermit')
  expect(getPotentialMatchesFor('Chariot'))
    .toContain('World')

  // By Element, AIR (should be 3 expectations)
  expect(getPotentialMatchesFor('Chariot'))
    .toContain('World')
  expect(getPotentialMatchesFor('Chariot'))
    .toContain('Mountebank')
  expect(getPotentialMatchesFor('Chariot'))
    .toContain('Empress')

  // By Planet/Sign (none for this card in ToM Configuration)
})

test('Wheel', () => {
  // By Modality, MUTABLE (should be 4 expectations)
  expect(getPotentialMatchesFor('Wheel'))
    .toContain('Mountebank')
  expect(getPotentialMatchesFor('Wheel'))
    .toContain('Temperance')
  expect(getPotentialMatchesFor('Wheel'))
    .toContain('Judgement')
  expect(getPotentialMatchesFor('Wheel'))
    .toContain('Force')

  // By Element, WATER (should be 3 expectations)
  expect(getPotentialMatchesFor('Wheel'))
    .toContain('Judgement')
  expect(getPotentialMatchesFor('Wheel'))
    .toContain('Hermit')
  expect(getPotentialMatchesFor('Wheel'))
    .toContain('Popess')

  // By Planet/Sign (none for this card in ToM Configuration)
})

test('Sun', () => {
  // By Modality (none for this card in ToM Configuration)
  // By Element (none for this card in ToM Configuration)

  // By Planet/Sign (1 expectation)
  expect(getPotentialMatchesFor('Sun'))
    .toContain('Star')
})

test('Moon', () => {
  // By Modality (none for this card in ToM Configuration)
  // By Element (none for this card in ToM Configuration)

  // By Planet/Sign (1 expectation)
  expect(getPotentialMatchesFor('Moon'))
    .toContain('Popess')
})

test('Hanged Man', () => {
  // By Modality (none for this card in ToM Configuration)
  // By Element (none for this card in ToM Configuration)

  // By Planet/Sign(2 expectations)
  expect(getPotentialMatchesFor('Hanged Man'))
    .toContain('Temperance')
  expect(getPotentialMatchesFor('Hanged Man'))
    .toContain('Mountebank')
})

test('Lovers', () => {
  // By Modality (none for this card in ToM Configuration)
  // By Element (none for this card in ToM Configuration)

  // By Planet/Sign (2 expectations)
  expect(getPotentialMatchesFor('Lovers'))
    .toContain('Empress')
  expect(getPotentialMatchesFor('Lovers'))
    .toContain('Devil')
})

test('Tower', () => {
  // By Modality (none for this card in ToM Configuration)
  // By Element (none for this card in ToM Configuration)

  // By Planet/Sign (2 expectations)
  expect(getPotentialMatchesFor('Tower'))
    .toContain('Hermit')
  expect(getPotentialMatchesFor('Tower'))
    .toContain('Emperor')
})

test('Justice', () => {
  // By Modality (none for this card in ToM Configuration)
  // By Element (none for this card in ToM Configuration)

  // By Planet/Sign (2 expectations)
  expect(getPotentialMatchesFor('Justice'))
    .toContain('Judgement')
  expect(getPotentialMatchesFor('Justice'))
    .toContain('Force')
})

test('Death', () => {
  // By Modality (none for this card in ToM Configuration)

  // By Element (3 expectations)
  expect(getPotentialMatchesFor('Death'))
    .toContain('Pope')
  expect(getPotentialMatchesFor('Death'))
    .toContain('Temperance')
  expect(getPotentialMatchesFor('Death'))
    .toContain('Devil')

  // By Planet/Sign (2 expectations)
  expect(getPotentialMatchesFor('Death'))
    .toContain('World')
  expect(getPotentialMatchesFor('Death'))
    .toContain('Pope')
})

test('Emperor', () => {
  // By Modality, CARDINAL (should be 4 expectations)
  expect(getPotentialMatchesFor('Emperor')).toContain('Le Mat')
  expect(getPotentialMatchesFor('Emperor')).toContain('Empress')
  expect(getPotentialMatchesFor('Emperor')).toContain('Popess')
  expect(getPotentialMatchesFor('Emperor')).toContain('Pope')

  // By Element, FIRE (should be 3 expectations)
  expect(getPotentialMatchesFor('Emperor')).toContain('Le Mat')
  expect(getPotentialMatchesFor('Emperor')).toContain('Star')
  expect(getPotentialMatchesFor('Emperor')).toContain('Force')

  // By Planet/Sign (should be 1 expectation)
  expect(getPotentialMatchesFor('Emperor')).toContain('Tower')
})

test('Empress', () => {
  // By Modality, CARDINAL (should be 4 expectations)
  expect(getPotentialMatchesFor('Empress')).toContain('Pope')
  expect(getPotentialMatchesFor('Empress')).toContain('Le Mat')
  expect(getPotentialMatchesFor('Empress')).toContain('Emperor')
  expect(getPotentialMatchesFor('Empress')).toContain('Popess')

  // By Element, AIR (should be 3 expectations)
  expect(getPotentialMatchesFor('Empress'))
    .toContain('Chariot')
  expect(getPotentialMatchesFor('Empress'))
    .toContain('World')
  expect(getPotentialMatchesFor('Empress'))
    .toContain('Mountebank')

  // By Planet/Sign (should be 1 expectation)
  expect(getPotentialMatchesFor('Empress'))
    .toContain('Lovers')
})

test('Devil', () => {
  // By Modality, FIXED (should be 4 expectations)
  expect(getPotentialMatchesFor('Devil')).toContain('Chariot')
  expect(getPotentialMatchesFor('Devil')).toContain('World')
  expect(getPotentialMatchesFor('Devil')).toContain('Star')
  expect(getPotentialMatchesFor('Devil')).toContain('Hermit')

  // By Element (should be 3 expectations)
  expect(getPotentialMatchesFor('Devil')).toContain('Chariot')
  expect(getPotentialMatchesFor('Devil')).toContain('Mountebank')
  expect(getPotentialMatchesFor('Devil')).toContain('World')

  // By Planet/Sign (should be 1 expectation)
  expect(getPotentialMatchesFor('Devil')).toContain('Lovers')
})

test('Star', () => {
  // By Modality, FIXED (should be 4 expectations)
  expect(getPotentialMatchesFor('Star')).toContain('Devil')
  expect(getPotentialMatchesFor('Star')).toContain('Hermit')
  expect(getPotentialMatchesFor('Star')).toContain('World')
  expect(getPotentialMatchesFor('Star')).toContain('Chariot')

  // By Element (should be 3 expectations)
  expect(getPotentialMatchesFor('Star')).toContain('Emperor')
  expect(getPotentialMatchesFor('Star')).toContain('Force')
  expect(getPotentialMatchesFor('Star')).toContain('Le Mat')

  // By Planet/Sign (should be 1 expectation)
  expect(getPotentialMatchesFor('Star')).toContain('Sun')
})

test('Mountebank', () => {
  // By Modality, MUTABLE (should be 4 expectations)
  expect(getPotentialMatchesFor('Mountebank'))
    .toContain('Temperance')
  expect(getPotentialMatchesFor('Mountebank')).toContain('Force')
  expect(getPotentialMatchesFor('Mountebank')).toContain('Wheel')
  expect(getPotentialMatchesFor('Mountebank'))
    .toContain('Judgement')

  // By Element, AIR (should be 3 expectations)
  expect(getPotentialMatchesFor('Mountebank'))
    .toContain('Chariot')
  expect(getPotentialMatchesFor('Mountebank'))
    .toContain('Empress')
  expect(getPotentialMatchesFor('Mountebank')).toContain('World')

  // By Planet/Sign (should be 1 expectation)
  expect(getPotentialMatchesFor('Mountebank'))
    .toContain('Hanged Man')
})

test('Popess', () => {
  // By Modality, CARDINAL (should be 4 expectations)
  expect(getPotentialMatchesFor('Popess')).toContain('Emperor')
  expect(getPotentialMatchesFor('Popess')).toContain('Empress')
  expect(getPotentialMatchesFor('Popess')).toContain('Pope')
  expect(getPotentialMatchesFor('Popess')).toContain('Le Mat')

  // By Element, WATER (should be 3 expectations)
  expect(getPotentialMatchesFor('Popess')).toContain('Hermit')
  expect(getPotentialMatchesFor('Popess')).toContain('Judgement')
  expect(getPotentialMatchesFor('Popess')).toContain('Wheel')

  // By Planet/Sign (should be 1 expectation)
  expect(getPotentialMatchesFor('Popess')).toContain('Moon')
})

test('Pope', () => {
  // By Modality, CARDINAL (should be 4 expectations)
  expect(getPotentialMatchesFor('Pope')).toContain('Popess')
  expect(getPotentialMatchesFor('Pope')).toContain('Emperor')
  expect(getPotentialMatchesFor('Pope')).toContain('Empress')
  expect(getPotentialMatchesFor('Pope')).toContain('Le Mat')

  // By Element, EARTH (should be 3 expectations)
  expect(getPotentialMatchesFor('Pope')).toContain('Death')
  expect(getPotentialMatchesFor('Pope')).toContain('Devil')
  expect(getPotentialMatchesFor('Pope')).toContain('Temperance')

  // By Planet/Sign (should be 1 expectation)
  expect(getPotentialMatchesFor('Pope')).toContain('Death')
})

test('Temperance', () => {
  // By Modality, MUTABLE (should be 4 expectations)
  expect(getPotentialMatchesFor('Temperance')).toContain('Force')
  expect(getPotentialMatchesFor('Temperance')).toContain('Wheel')
  expect(getPotentialMatchesFor('Temperance'))
    .toContain('Judgement')
  expect(getPotentialMatchesFor('Temperance'))
    .toContain('Mountebank')

  // By Element, EARTH (should be 3 expectations)
  expect(getPotentialMatchesFor('Temperance')).toContain('Death')
  expect(getPotentialMatchesFor('Temperance')).toContain('Devil')
  expect(getPotentialMatchesFor('Temperance')).toContain('Pope')

  // By Planet/Sign (should be 1 expectation)
  expect(getPotentialMatchesFor('Temperance'))
    .toContain('Hanged Man')
})

test('Hermit', () => {
  // By Modality, CARDINAL (should be 4 expectations)
  expect(getPotentialMatchesFor('Hermit')).toContain('Empress')
  expect(getPotentialMatchesFor('Hermit')).toContain('Pope')
  expect(getPotentialMatchesFor('Hermit')).toContain('Popess')
  expect(getPotentialMatchesFor('Hermit')).toContain('Le Mat')

  // By Element, WATER (should be 3 expectations)
  expect(getPotentialMatchesFor('Hermit')).toContain('Judgement')
  expect(getPotentialMatchesFor('Hermit')).toContain('Popess')
  expect(getPotentialMatchesFor('Hermit')).toContain('Wheel')

  // By Planet/Sign (should be 1 expectation)
  expect(getPotentialMatchesFor('Hermit')).toContain('Tower')
})

test('World', () => {
  // By Modality, FIXED (should be 4 expectations)
  expect(getPotentialMatchesFor('World')).toContain('Devil')
  expect(getPotentialMatchesFor('World')).toContain('Chariot')
  expect(getPotentialMatchesFor('World')).toContain('Star')
  expect(getPotentialMatchesFor('World')).toContain('Hermit')

  // By Element, AIR (should be 3 expectations)
  expect(getPotentialMatchesFor('World')).toContain('Chariot')
  expect(getPotentialMatchesFor('World')).toContain('Empress')
  expect(getPotentialMatchesFor('World')).toContain('Mountebank')

  // By Planet/Sign (should be 1 expectation)
  expect(getPotentialMatchesFor('World')).toContain('Death')
})

test('Judgement', () => {
  // By Modality, MUTABLE (should be 4 expectations)
  expect(getPotentialMatchesFor('Judgement')).toContain('Mountebank')
  expect(getPotentialMatchesFor('Judgement')).toContain('Temperance')
  expect(getPotentialMatchesFor('Judgement')).toContain('Force')
  expect(getPotentialMatchesFor('Judgement')).toContain('Wheel')

  // By Element, WATER (should be 3 expectations)
  expect(getPotentialMatchesFor('Judgement')).toContain('Popess')
  expect(getPotentialMatchesFor('Judgement')).toContain('Hermit')
  expect(getPotentialMatchesFor('Judgement')).toContain('Wheel')

  // By Planet/Sign (should be 1 expectation)
  expect(getPotentialMatchesFor('Judgement')).toContain('Justice')
})

test('Force', () => {
  // By Modality, MUTABLE (should be 4 expectations)
  expect(getPotentialMatchesFor('Force')).toContain('Mountebank')
  expect(getPotentialMatchesFor('Force')).toContain('Temperance')
  expect(getPotentialMatchesFor('Force')).toContain('Wheel')
  expect(getPotentialMatchesFor('Force')).toContain('Judgement')

  // By Element, FIRE (should be 3 expectations)
  expect(getPotentialMatchesFor('Force')).toContain('Le Mat')
  expect(getPotentialMatchesFor('Force')).toContain('Emperor')
  expect(getPotentialMatchesFor('Force')).toContain('Star')

  // By Planet/Sign (should be 1 expectation)
  expect(getPotentialMatchesFor('Force')).toContain('Justice')
})
