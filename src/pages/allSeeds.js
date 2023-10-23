import { ref } from 'vue'

export const allCards = ref([
  {
    seedCode: 'SC1',
    seedLinkHref: 'https://musictheorysite.com/',
    seedLinkText: 'Music Theory Site',
    seedSourceType: 'tik tok video',
    seedSourceLink: 'https://www.tiktok.com/t/ZT8h81wpk/',
    passCodes: [

    ],
  },
  {
    seedCode: 'SC2',
    seedLinkHref: 'https://www.hooktheory.com/',
    seedLinkText: 'Hook Theory',
    seedSourceType: 'tik tok video',
    seedSourceLink: 'https://www.tiktok.com/t/ZT8h81wpk/',
    passCodes: [

    ],
  },
  {
    seedCode: 'SC3',
    seedLinkHref: 'https://www.soundgym.co/',
    seedLinkText: 'Sound Gym',
    seedSourceType: 'tik tok video',
    seedSourceLink: 'https://www.tiktok.com/t/ZT8h81wpk/',
    passCodes: [

    ],
  },
  {
    seedCode: 'ZAG1',
    seedLinkHref: 'https://www.youtube.com/watch?v=B3lsJmwNO40',
    seedLinkText: 'You\'re Stuck In Here With Me',
    seedSourceType: 'youtube video',
    seedSourceLink: '',
    passCodes: [
      'ZAGREUS',
    ],
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

export function getSeedsFor(aPassCode) {
  const foundSeeds
        = allCards.value.filter(seedEntry =>
          seedEntry.passCodes.includes(aPassCode.toUpperCase()),
        )

  return foundSeeds
}
