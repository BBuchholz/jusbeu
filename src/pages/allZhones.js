import { ref } from 'vue'

export const allZhones = ref([
  {
    zhoneCode: 'COVENTRY',
    zhoneName: 'Coventry Grove Builders Association',
    zhoneHref: 'https://cgba.netlify.app',
    zhoneImgSrc: 'https://madamadam.s3.us-east-2.amazonaws.com/CGBA-f6df_CARD.png',
  },
  {
    zhoneCode: 'JSY',
    zhoneName: 'Jacob\'s Salvage Yard',
    zhoneHref: 'https://extremely-daemonic-gate.netlify.app/',
    zhoneImgSrc: 'https://madamadam.s3.us-east-2.amazonaws.com/JSY-5bd4_CARD.png',
  },
  {
    zhoneCode: 'SC',
    zhoneName: 'Sonic Circle (OLDER VERSION)',
    zhoneHref: 'https://nameless-star.netlify.app',
    zhoneImgSrc: 'https://madamadam.s3.us-east-2.amazonaws.com/SC-08ef_CARD.png',
  },
  {
    zhoneCode: 'SoC',
    zhoneName: 'Sonic Circle Shell (NEWER VERSION)',
    zhoneHref: 'https://sonic-circle.netlify.app',
  },
  {
    zhoneCode: 'SCA',
    zhoneName: 'Sylfan Circle Academy (OLDER VERSION)',
    zhoneHref: 'https://antiquarian-cup.netlify.app',
    zhoneImgSrc: 'https://madamadam.s3.us-east-2.amazonaws.com/SYLFAN-857a_CARD.png',
  },
  {
    zhoneCode: 'SyC',
    zhoneName: 'Sylvan Circle Academy (NEWER VERSION)',
    zhoneHref: 'https://sylvan-circle.netlify.app',
    zhoneImgSrc: 'https://madamadam.s3.us-east-2.amazonaws.com/SyC-939f_CARD.png',
  },
  {
    zhoneCode: 'SCHS',
    zhoneName: '(Socratic/Slacker) Circle Home School',
    zhoneHref: 'https://codified-heart-song.netlify.app',
    zhoneImgSrc: 'https://madamadam.s3.us-east-2.amazonaws.com/SCHS-62e8_CARD.png',
  },
  {
    zhoneCode: 'OBAOLG',
    zhoneName: 'Our Builders Association Ov Layered Generalists',
    zhoneHref: 'https://truthfully-cyclopean-barracks.netlify.app',
    zhoneImgSrc: 'https://madamadam.s3.us-east-2.amazonaws.com/BAOLG-0c83.png',
  },
  {
    zhoneCode: 'MDMDM',
    zhoneName: 'MaDaMaDaM',
    zhoneHref: 'https://madamadam.netlify.app',
  },
  {
    zhoneCode: 'AWLWA',
    zhoneName: 'AWLWA Carteography',
    zhoneHref: 'https://papaya-parfait-8fcafc.netlify.app',
    zhoneImgSrc: 'https://madamadam.s3.us-east-2.amazonaws.com/AWLWA-6bf1_CARD.png',
  },
  {
    zhoneCode: 'STS',
    zhoneName: 'Shepton Transmission Services',
  },
  {
    zhoneCode: 'CELMART',
    zhoneName: 'C(a/u)PMART',
    zhoneHref: 'https://fearlessly-artifactual.netlify.app',
    zhoneImgSrc: 'https://madamadam.s3.us-east-2.amazonaws.com/CELMART-1923_CARD.png',
  },
  {
    zhoneCode: 'AMOS',
    zhoneName: 'A Myriad Ov Strivings',
    zhoneHref: 'https://a-myriad-of-strivings.netlify.app',
    zhoneImgSrc: 'https://madamadam.s3.us-east-2.amazonaws.com/AMOS-c558_CARD.png',
  },
  {
    zhoneCode: 'OBALG',
    zhoneName: 'Our Builders Awakening Library Guild',
  },
])

export const sortedZhones = ref([
  getZhoneFor('COVENTRY'),
  getZhoneFor('JSY'),
  getZhoneFor('SC'),
  getZhoneFor('SoC'),
  getZhoneFor('SCA'),
  getZhoneFor('SyC'),
  getZhoneFor('SCHS'),
  getZhoneFor('OBAOLG'),
  getZhoneFor('MDMDM'),
  getZhoneFor('AWLWA'),
  getZhoneFor('STS'),
  getZhoneFor('CELMART'),
  getZhoneFor('AMOS'),
  getZhoneFor('OBALG'),
])

export function getZhoneFor(aZhoneCode) {
  const foundZhone
        = allZhones.value.find(zhone =>
          zhone.zhoneCode.toLowerCase()
                  === aZhoneCode.toLowerCase(),
        )

  return foundZhone
}
