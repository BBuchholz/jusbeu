import { ref } from 'vue'

export const allCards = ref([
  {
    seedCode: 'SC1',
    seedLinkHref: 'https://musictheorysite.com/',
    seedLinkText: 'Music Theory Site',
    seedSourceType: 'tik tok video',
    seedSourceLink: 'https://www.tiktok.com/t/ZT8h81wpk/',
  },
  {
    seedCode: 'SC2',
    seedLinkHref: 'https://www.hooktheory.com/',
    seedLinkText: 'Hook Theory',
    seedSourceType: 'tik tok video',
    seedSourceLink: 'https://www.tiktok.com/t/ZT8h81wpk/',
  },
  {
    seedCode: 'SC3',
    seedLinkHref: 'https://www.soundgym.co/',
    seedLinkText: 'Sound Gym',
    seedSourceType: 'tik tok video',
    seedSourceLink: 'https://www.tiktok.com/t/ZT8h81wpk/',
  },
])

export function getSeedForSeedCode(aSeedCode) {
  const foundCredit
        = allCards.value.find(seed =>
          seed.seedCode.toLowerCase()
                  === aSeedCode.toLowerCase(),
        )

  return foundCredit
}
