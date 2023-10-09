import { ref } from 'vue'

export const allCards = ref([
  {
    passCode: 'SCA',
    uuid: 'fd10ebc6-e270-4488-8208-a94089b70a5f',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/SCA-0a5f_CARD.png',
    designCredit: 'Brent Buchholz',
    componentCredits: [
      {
        creditItem: 'image',
        creditDue: 'Bing Image Creator',
      },
    ],
  },
  {
    passCode: 'COVENTRY',
    uuid: '670487fa-39e9-4118-ab6b-8d0ae368f6df',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/CGBA-f6df_CARD.png',
    designCredit: 'Brent Buchholz',
    componentCredits: [
      {
        creditItem: 'image',
        creditDue: 'Bing Image Creator',
      },
    ],
  },
  {
    passCode: 'SC',
    uuid: 'a87e0c60-4492-4b2d-a9b4-d901c6bf08ef',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/SC-08ef_CARD.png',
    designCredit: 'Brent Buchholz',
    componentCredits: [
      {
        creditItem: 'image',
        creditDue: 'Imagine AI Art App',
      },
    ],
  },
  {
    passCode: 'ENERGY1',
    uuid: 'ce09a0e0-f2bf-4fc3-9e7a-f70d865d63af',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/ENERGY1-63af_CARD.png',
    designCredit: 'Brent Buchholz',
    componentCredits: [
      {
        creditItem: 'image',
        creditDue: 'Bing Image Creator',
      },
    ],
  },
])

// TODO: build function that is exported that gets a single
// card by passcode so in other pages we can
// call this function to get just one, I want to display
// cards next to the zhones, and have the written
// part be the description

export function getCardFor(aPassCode) {
  const foundCard
        = allCards.value.find(card =>
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

export function getCreditsFor(aPassCode) {
  const foundCredit = getCreditFor(aPassCode)

  let output = `(C) ${foundCredit.designCredit}`

  if (foundCredit.componentCredits.length > 0) {
    output += ' (card layout and design)'

    for (const compCredit of foundCredit.componentCredits)
      output += `, ${compCredit.creditDue} (${compCredit.creditItem})`
  }

  return output
}
