import { ref } from 'vue'

export const allSeeds = ref([
  {
    seedCode: 'TAPT',
    seedLinkHref: 'https://docs.google.com/document/d/1z9QHG9wp0v2MzasvNKV0YWWop2HbX8llAQ0GEYS3JFk/edit?usp=sharing',
    seedLinkText: 'TOMES Activity: Pl4nt1n Tr33s',
    seedSourceType: 'Google Doc In Progress',
    seedSourceLink: '',
    passCodes: [
      'TOMES',
    ],
  },
  {
    seedCode: 'NRG1',
    seedLinkHref: 'https://www.youtube.com/watch?v=zodg4WwBovc',
    seedLinkText: 'Everything Is Energy (video)',
    seedSourceType: 'youtube video',
    seedSourceLink: '',
    passCodes: [
      'ENERGY',
    ],
  },
  {
    seedCode: 'NRG2',
    seedLinkHref: 'https://www.youtube.com/watch?v=cWLOUCXKHZw',
    seedLinkText: 'LEARN TO VIBRATE CORRECTLY (video)',
    seedSourceType: 'youtube video',
    seedSourceLink: '',
    passCodes: [
      'ENERGY',
    ],
  },
  {
    seedCode: 'SGS1',
    seedLinkHref: 'https://forms.gle/gjxyu9cYcdiHh2TcA',
    seedLinkText: 'Squirrel Gathers Seeds',
    seedSourceType: 'Google Form',
    seedSourceLink: '',
    passCodes: [
      'RATATOSKR',
    ],
  },
  {
    seedCode: 'TIG1',
    seedLinkHref: 'https://www.tiktok.com/t/ZT8rMPcHv/',
    seedLinkText: 'Still Dre (PianoTok play along video)',
    seedSourceType: 'tik tok piano play along video',
    seedSourceLink: '',
    passCodes: [
      'TIG',
    ],
  },
  {
    seedCode: 'TIG2',
    seedLinkHref: 'https://www.tiktok.com/t/ZT8rM97j8/',
    seedLinkText: 'Epic Hack (PianoTok play along video)',
    seedSourceType: 'tik tok piano play along video',
    seedSourceLink: '',
    passCodes: [
      'TIG',
    ],
  },
  {
    seedCode: 'TIG3',
    seedLinkHref: 'https://www.tiktok.com/t/ZT8rBA8wn/',
    seedLinkText: 'Fur Elise (PianoTok play along video)',
    seedSourceType: 'tik tok piano play along video',
    seedSourceLink: '',
    passCodes: [
      'TIG',
    ],
  },
  {
    seedCode: 'TIG4',
    seedLinkHref: 'https://www.tiktok.com/t/ZT8rBkG8r/',
    seedLinkText: 'Imagine 2 (PianoTok play along video)',
    seedSourceType: 'tik tok piano play along video',
    seedSourceLink: '',
    passCodes: [
      'TIG',
    ],
  },
  {
    seedCode: 'TIG5',
    seedLinkHref: 'https://www.tiktok.com/t/ZT8rBjpvg/',
    seedLinkText: 'Imagine 1 (PianoTok play along video)',
    seedSourceType: 'tik tok piano play along video',
    seedSourceLink: '',
    passCodes: [
      'TIG',
    ],
  },
  {
    seedCode: 'TIG6',
    seedLinkHref: 'https://www.tiktok.com/t/ZT8rdutAR/',
    seedLinkText: 'Halloween Theme (PianoTok play along video)',
    seedSourceType: 'tik tok piano play along video',
    seedSourceLink: '',
    passCodes: [
      'TIG',
    ],
  },
  {
    seedCode: 'TIG7',
    seedLinkHref: 'https://www.tiktok.com/t/ZT8rdCQqb/',
    seedLinkText: 'Hallelujah (PianoTok play along video)',
    seedSourceType: 'tik tok piano play along video',
    seedSourceLink: '',
    passCodes: [
      'TIG',
    ],
  },
  {
    seedCode: 'TIG8',
    seedLinkHref: 'https://www.tiktok.com/t/ZT8rduJkA/',
    seedLinkText: 'What Is Love (PianoTok play along video)',
    seedSourceType: 'tik tok piano play along video',
    seedSourceLink: '',
    passCodes: [
      'TIG',
    ],
  },
  {
    seedCode: 'SC1',
    seedLinkHref: 'https://musictheorysite.com/',
    seedLinkText: 'Music Theory Site',
    seedSourceType: 'tik tok video',
    seedSourceLink: 'https://www.tiktok.com/t/ZT8h81wpk/',
    passCodes: [
      'SC',
    ],
  },
  {
    seedCode: 'SC2',
    seedLinkHref: 'https://www.hooktheory.com/',
    seedLinkText: 'Hook Theory',
    seedSourceType: 'tik tok video',
    seedSourceLink: 'https://www.tiktok.com/t/ZT8h81wpk/',
    passCodes: [
      'SC',
    ],
  },
  {
    seedCode: 'SC3',
    seedLinkHref: 'https://www.soundgym.co/',
    seedLinkText: 'Sound Gym',
    seedSourceType: 'tik tok video',
    seedSourceLink: 'https://www.tiktok.com/t/ZT8h81wpk/',
    passCodes: [
      'SC',
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
        = allSeeds.value.find(seed =>
          seed.seedCode.toLowerCase()
                  === aSeedCode.toLowerCase(),
        )

  return foundCredit
}

export function getSeedsForPassCode(aPassCode) {
  const foundSeeds
        = allSeeds.value.filter(seedEntry =>
          seedEntry.passCodes.includes(aPassCode.toUpperCase()),
        )

  return foundSeeds
}
