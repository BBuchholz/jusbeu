import { ref } from 'vue'
import { mdSet2RMX, mdSetMeta2RMX } from './mdSet2RMX.md'

export const mdSet2RMXCards = ref([
  ...mdSet2RMX,
])

export const mdSet2RMXMeta = ref(
  mdSetMeta2RMX,
)

// TODO: remove these JSON versions in favor of the MD version
//       (comment out and test first before removing entirely)

export const setMeta2RMX = ref(
  {
    setCode: '2RMX',
    setName: '2B Remixed Set 1',
    setDescription: 'A set consisting of cards in previous formats that need to be remixed into the new standard for release',
    setSize: 2,
  },
)

export const set2RMX = ref([
  {
    passCode: 'TMPLT',
    uuid: 'ab04fe88-450c-488a-82af-1ca3dd5d2818',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/TMPLT-2818_CARD.png',
    designCredit: 'Brent Buchholz',
    componentCredits: [
      {
        creditItem: 'image',
        creditDue: 'Ideogram AI Text Art Generator',
      },
    ],
  },
  {
    passCode: 'TMPLT',
    uuid: '9a01f805-272c-4617-a824-76990b35ad1e',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/TMPLT-ad1e_CARD.png',
    designCredit: 'Brent Buchholz',
    componentCredits: [],
  },
])

export function getCreditsForCard() {
  return 'set2RMX.getCreditsForCard not implemented'
}
