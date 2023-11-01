import { ref } from 'vue'

export const setMetaTMPLT1 = ref([
  {
    setName: 'Template Set 1',
  },
])

export const setTMPLT1 = ref([
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
