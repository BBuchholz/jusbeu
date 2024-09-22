import { ref } from 'vue'

export const setMetaTMPLT1 = ref(
  {
    setCode: 'TMPLT1',
    setName: 'Template Set 1',
    setDescription: 'A basic set consisting of reusable templates for other cards to be remixed from',
    setSize: 2,
  },
)

export const setTMPLT1 = ref([
  {
    passCode: 'TMPLT',
    uuid: 'ab04fe88-450c-488a-82af-1ca3dd5d2818',
    image: 'https://d17d04qkxoe2lw.cloudfront.net/TMPLT-2818_CARD.png',
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
    image: 'https://d17d04qkxoe2lw.cloudfront.net/TMPLT-ad1e_CARD.png',
    designCredit: 'Brent Buchholz',
    componentCredits: [],
  },
])
