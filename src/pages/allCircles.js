import { ref } from 'vue'
import { allCards } from './allSets'

export const allCircles = ref([
  {

    circleName: 'SCA Book Shelf: Chaos Magick (SCA Chaos Shelf)',
    circleCode: 'SCACS',
    passCodes: [
      'TOMES',
      'NRNMCN',
    ],
  },
  {

    circleName: 'Duality of Man and Beast',
    circleCode: 'BEASTMANDUALITY',
    passCodes: [
      'ZAGREUS',
    ],
  },
  {
    circleName: 'Paradigms of GodHead',
    circleCode: 'GHPARADIGM',
    passCodes: [
      'ZAGREUS',
    ],
  },
  {
    circleName: 'Gematria',
    circleCode: 'GEMATRIA',
    passCodes: [
      'PERMUTATIONS',
    ],
  },
  {
    circleName: 'Temurah',
    circleCode: 'TEMURAH',
    passCodes: [
      'PERMUTATIONS',
    ],
  },
  {
    circleName: 'Notarikon',
    circleCode: 'NOTARIKON',
    passCodes: [
      'PERMUTATIONS',
    ],
  },
])

export function getCirclesForPassCode(aPassCode) {
  const foundcircles
        = allCircles.value.filter(circleEntry =>
          circleEntry.passCodes.includes(aPassCode.toUpperCase()),
        )

  return foundcircles
}

export function getCircleForCircleCode(aCircleCode) {
  const foundCircle
        = allCircles.value.find(circle =>
          circle.circleCode.toLowerCase()
                  === aCircleCode.toLowerCase(),
        )

  return foundCircle
}

export function getCardsForPassCodeArray(aPassCodeArray) {
  let foundCards

  if (aPassCodeArray && aPassCodeArray.length > 0) {
    foundCards
      = allCards.value.filter(card =>
        aPassCodeArray.includes(card.passCode))
  }
  else {
    foundCards = []
  }

  return foundCards
}
