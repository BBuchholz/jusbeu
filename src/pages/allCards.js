import { ref } from 'vue'

export const allCards = ref([
  {
    passCode: 'BAOLG2',
    siteUrl: 'https://baolg.netlify.app/myrKiSs/BAOLG2',
    siteName: 'Builders Association Ov Layered Generalists',
    siteDesc: 'Builders Association Ov Layered Generalists, a living, breathing WorkShop PortFolio ov which thaSG (this site) is an extension',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/BAOLG-0c83.png',
  },
  {
    passCode: 'BUILDER',
    siteUrl: 'https://jacobs-salvage.netlify.app/myrKiSs/BUILDER',
    siteName: 'Jacob\'s Salvage Yard',
    siteDesc: 'A Coventry Grove site, and thus subject to the MATURE MATERIAL disclaimer. A place to recycle ideas and attachments into the raw components of inspiration and artistic endeavor... We don\'t throw away anything in Coventry Grove, all are Gathered Back into tha Gratefully Bountiful Gatherlyngs...',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/BUILDER-2f53.png',
  },
  {
    passCode: 'CARDS',
    siteUrl: 'https://myriad-central.netlify.app/myrKiSs/CARDS',
    siteName: 'Myriad Central Node',
    siteDesc: 'Both a noun and a proper noun, thee Myriad Central Node is the template for all Myriad Central Nodes. Comes equipped with the basic tools to maintain a node as well as documentation explaining what the ecosystem is and how it all works',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/CARDS-6752_CARD.png',
  },
  {
    passCode: 'CGBA',
    siteUrl: 'https://cgba.netlify.app/myrKiSs/CGBA',
    siteName: 'Coventry Grove Builders Association',
    siteDesc: 'mature occult content, philosophical explorations that occasionally need to use the safe word... (link on this page intentionally disabled, use CARDS for access)',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/CGBA-13c9.png',
  },
  {
    passCode: 'MCCU',
    siteUrl: 'https://mccu.netlify.app/myrKiSs/MCCU',
    siteName: 'Myriad Central Credit Union',
    siteDesc: 'Giving Credit Where Credit Is Due',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/MCCU-adec_CARD.png',
  },
  {
    passCode: 'PANDAEMONIC',
    siteUrl: 'https://sonic-circle.netlify.app/myrKiSs/PANDAEMONIC',
    siteName: 'Coventry Grove Credit Union',
    siteDesc: 'to afford discretion to members of CGBA, a separate Credit Union, with distinct persona registries, is maintained. Address will be given only to members of CGBA, link here is disabled but is mentioned to assure the curious of discretion',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/PANDAEMONIC-02ea_CARD.png',
  },
  {
    passCode: 'PLAY',
    siteUrl: 'https://sonic-circle.netlify.app/myrKiSs/PLAY',
    siteName: 'Sonic Circle',
    siteDesc: 'A Place 4 Musicians 2 Play! A non-judgemental, turn based, participation oriented playground for musicians and aspiring musicians of all skill levels and goal orientations',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/PLAY-4249.png',
  },
  {
    passCode: 'SYLFAN',
    siteUrl: 'https://sylvan-circle.netlify.app/myrKiSs/SYLFAN',
    siteName: 'Sylvan Circle Academy',
    siteDesc: 'The "Sylfan" philosophy of Sylvan Circle Academy encourages "Self and Circle" thinking with regards to learning and dissemination of learning...',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/SYLFAN-857a_CARD.png',
  },
  {
    passCode: 'SYW5',
    siteUrl: 'https://myriad-central.netlify.app/myrKiSs/SYW5',
    siteName: 'Myriad Central Node',
    siteDesc: 'Both a noun and a proper noun, thee Myriad Central Node is the template for all Myriad Central Nodes. Comes equipped with the basic tools to maintain a node as well as documentation explaining what the ecosystem is and how it all works',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/SYW5-ac89_CARD.png',
  },
  {
    passCode: 'WEWALKS',
    siteUrl: 'https://jus-be-u.netlify.app/myrKiSs/WEWALKS',
    siteName: 'JusBeU',
    siteDesc: 'Coventry Grove\'s little sister site, the more PG rated version of spirituality that keeps it safe and basic. A good place to learn about meditation and affirmations and general wellness without worrying about touching upon the more intense levels dealt with by CG in general...',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/WEWALKS-9071_20230821_115243_0000.png',
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
