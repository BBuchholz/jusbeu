import { ref } from 'vue'

export const allCards = ref([
  {
    cardKey: '01',
    cardTitle: 'The Mountebank',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/ToM_a01.jpg',
  },
  {
    cardKey: '02',
    cardTitle: 'The Popess',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/ToM_a02.jpg',
  },
  {
    cardKey: '03',
    cardTitle: 'The Empress',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/ToM_a03.jpg',
  },
  {
    cardKey: '04',
    cardTitle: 'The Emperor',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/ToM_a04.jpg',
  },
  {
    cardKey: '05',
    cardTitle: 'The Pope',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/ToM_a05.jpg',
  },
  {
    cardKey: '06',
    cardTitle: 'The Lovers',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/ToM_a06.jpg',
  },
  {
    cardKey: '07',
    cardTitle: 'The Chariot',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/ToM_a07.jpg',
  },
  {
    cardKey: '08',
    cardTitle: 'Justice',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/ToM_a08.jpg',
  },
  {
    cardKey: '09',
    cardTitle: 'The Hermit',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/ToM_a09.jpg',
  },
  {
    cardKey: '10',
    cardTitle: 'The Wheel',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/ToM_a10.jpg',
  },
  {
    cardKey: '11',
    cardTitle: 'Strength',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/ToM_a11.jpg',
  },
  {
    cardKey: '12',
    cardTitle: 'The Hanged Man',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/ToM_a12.jpg',
  },
  {
    cardKey: '13',
    cardTitle: 'Death',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/ToM_a13.jpg',
  },
  {
    cardKey: '14',
    cardTitle: 'Temperance',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/ToM_a14.jpg',
  },
  {
    cardKey: '15',
    cardTitle: 'The Devil',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/ToM_a15.jpg',
  },
  {
    cardKey: '16',
    cardTitle: 'The Tower',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/ToM_a16.jpg',
  },
  {
    cardKey: '17',
    cardTitle: 'The Star',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/ToM_a17.jpg',
  },
  {
    cardKey: '18',
    cardTitle: 'The Moon',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/ToM_a18.jpg',
  },
  {
    cardKey: '19',
    cardTitle: 'The Sun',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/ToM_a19.jpg',
  },
  {
    cardKey: '20',
    cardTitle: 'Judgement',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/ToM_a20.jpg',
  },
  {
    cardKey: '21',
    cardTitle: 'The World',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/ToM_a21.jpg',
  },
  {
    cardKey: '22',
    cardTitle: 'Le Mat',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/ToM_a22.jpg',
  },
  {
    cardKey: 'Z01',
    cardTitle: 'Copyright',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/ToM_z01.jpg',
  },
])

// TODO: build function that is exported that gets a single
// card by passcode so in other pages we can
// call this function to get just one, I want to display
// cards next to the zhones, and have the written
// part be the description

export function getCardFor(aCardKey) {
  const foundCard
        = allCards.value.find(card =>
          card.cardKey.toLowerCase()
                  === aCardKey.toLowerCase(),
        )

  return foundCard
}

export function getImageForCardKey(aCardKey) {
  return getCardFor(aCardKey).image
}

export function getTitleForCardKey(aCardKey) {
  return getCardFor(aCardKey).cardTitle
}

export function hasCardKey(aCardKey) {
  return getCardFor(aCardKey) !== undefined
}
