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
  {
    passCode: 'JSY',
    uuid: 'f3745e9d-91a7-4beb-8c10-784fcd865bd4',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/JSY-5bd4_CARD.png',
    designCredit: 'Brent Buchholz',
    componentCredits: [
      {
      },
    ],
  },
  {
    passCode: 'JSY',
    uuid: 'd48dace7-80df-46b6-b8b4-c80b1c2ba4d6',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/JSY-a4d6_CARD.png',
    designCredit: 'Brent Buchholz',
    componentCredits: [
      {
      },
    ],
  },
  {
    passCode: 'BUILDER',
    uuid: '787ceeca-e0f0-4504-a7d4-5dadaa6e4db3',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/BUILDER-4db3_CARD.png',
    designCredit: 'Brent Buchholz',
    componentCredits: [
      {
        creditItem: 'image',
        creditDue: 'Bing Image Creator',
      },
    ],
  },
  {
    passCode: 'OBAOLG',
    uuid: '8666e3d0-02ce-4aa2-8ae5-f62ef174009b',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/OBAOLG-009b_CARD.png',
    designCredit: 'Brent Buchholz',
    componentCredits: [
      {
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
