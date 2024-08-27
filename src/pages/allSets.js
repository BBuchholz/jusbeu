import { ref } from 'vue'
import { setCG1 } from './setCG1'
import { setJBU1 } from './setJBU1'
import { setSFG1 } from './setSFG1'
import { setTMPLT1 } from './setTMPLT1'
import { setNOV23 } from './setNOV23'
import { setDEC23 } from './setDEC23'
import { setLammas24A } from './setLammas24A'

export const allCards = ref([
  ...setJBU1.value,
  ...setCG1.value,
  ...setSFG1.value,
  ...setTMPLT1.value,
  ...setNOV23.value,
  ...setDEC23.value,
  ...setLammas24A.value,
])

export function getCardFor(aPassCode) {
  const foundCard
        = allCards.value.find(card =>
          card.passCode.toLowerCase()
                  === aPassCode.toLowerCase(),
        )

  return foundCard
}

export function getCardsFor(aPassCode) {
  const foundCard
        = allCards.value.filter(card =>
          card.passCode.toLowerCase()
                  === aPassCode.toLowerCase(),
        )

  return foundCard
}

export function getCardForUuid(aUuid) {
  const foundCard
        = allCards.value.find(card =>
          card.uuid.toLowerCase()
                  === aUuid.toLowerCase(),
        )

  return foundCard
}

export function getCreditFor(aPassCode) {
  const foundCredit
        = allCards.value.find(card =>
          card.passCode.toLowerCase()
                  === aPassCode.toLowerCase(),
        )

  return foundCredit
}

export function getCreditForUuid(aUuid) {
  const foundCredit
        = allCards.value.find(card =>
          card.uuid.toLowerCase()
                  === aUuid.toLowerCase(),
        )

  return foundCredit
}

export function getCreditsFor(aPassCode) {
  const foundCredit = getCreditFor(aPassCode)

  let output = `(C) ${foundCredit.designCredit}`

  if (foundCredit.componentCredits.length > 0) {
    output += ' (card layout and design)'

    for (const compCredit of foundCredit.componentCredits) {
      if (compCredit && compCredit.creditDue && compCredit.creditItem)
        output += `, ${compCredit.creditDue} (${compCredit.creditItem})`
    }
  }

  return output
}

export function getCreditsForCard(aCard) {
  let output = `(C) ${aCard.designCredit}`

  if (aCard.componentCredits
      && aCard.componentCredits.length > 0) {
    output += ' (card layout and design)'

    for (const compCredit of aCard.componentCredits) {
      if (compCredit && compCredit.creditDue && compCredit.creditItem)
        output += `, ${compCredit.creditDue} (${compCredit.creditItem})`
    }
  }

  return output
}

export function getCreditsForUuid(aUuid) {
  const foundCredit = getCreditForUuid(aUuid)

  let output = `(C) ${foundCredit.designCredit}`

  output += ' (card layout and design)'

  if (foundCredit.componentCredits.length > 0) {
    for (const compCredit of foundCredit.componentCredits) {
      if (compCredit && compCredit.creditDue && compCredit.creditItem)
        output += `, ${compCredit.creditDue} (${compCredit.creditItem})`
    }
  }

  return output
}
