import { ref } from 'vue'

export const allCredit = ref([
  {
    cardUuid: 'fd10ebc6-e270-4488-8208-a94089b70a5f',
    cardDesignCredit: 'Brent Buchholz',
    cardComponentCredits: [
      {
        creditItem: 'image',
        creditDue: 'Bing Image Creator',
      },
    ],
  },
  {
    cardUuid: '670487fa-39e9-4118-ab6b-8d0ae368f6df',
    cardDesignCredit: 'Brent Buchholz',
    cardComponentCredits: [
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

export function getCreditFor(aCardUuid) {
  const foundCredit
        = allCredit.value.find(credit =>
          credit.cardUuid.toLowerCase()
                  === aCardUuid.toLowerCase(),
        )

  return foundCredit
}

export function getCreditsFor(aCardUuid) {
  const foundCredit = getCreditFor(aCardUuid)

  let output = `(C) ${foundCredit.cardDesignCredit}`

  if (foundCredit.cardComponentCredits.length > 0) {
    for (const compCredit of foundCredit.cardComponentCredits)
      output += `, ${compCredit.creditDue}`
  }

  return output
}
