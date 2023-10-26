import { ref } from 'vue'

export const allCards = ref([
  {

    topic: 'Duality of Man and Beast',
    topicCode: 'MBDUEL',
    passCodes: [
      'ZAGREUS',
    ],
  },
  {
    topic: 'Paradigms of GodHead',
    topicCode: 'GHPARADIGM',
    passCodes: [
      'ZAGREUS',
    ],
  },
  {
    topic: 'Gematria',
    topicCode: 'GEMATRIA',
    passCodes: [
      'PERMUTATIONS',
    ],
  },
  {
    topic: 'Temurah',
    topicCode: 'TEMURAH',
    passCodes: [
      'PERMUTATIONS',
    ],
  },
  {
    topic: 'Notarikon',
    topicCode: 'NOTARIKON',
    passCodes: [
      'PERMUTATIONS',
    ],
  },
])

export function getTopicsForPassCode(aPassCode) {
  const foundTopics
        = allCards.value.filter(topicEntry =>
          topicEntry.passCodes.includes(aPassCode.toUpperCase()),
        )

  return foundTopics
}
