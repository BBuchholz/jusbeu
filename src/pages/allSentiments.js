import { ref } from 'vue'

export const allSentiments = ref([
  {

    sentimentCode: '08ef_1',
    sentimentContent: 'Lovin tha Sonic Circle vibes!',
    sentimentSource: 'Pandaemonic',
    uuids: [
      'a87e0c60-4492-4b2d-a9b4-d901c6bf08ef',
    ],
  },
])

export function getSentimentsForUuid(aUuid) {
  const foundSentiments
      = allSentiments.value.filter(sentiment =>
        sentiment.uuids.includes(aUuid))

  return foundSentiments
}
