import { ref } from 'vue'

export const allZhones = ref([
  {
    zhoneCode: 'COVENTRY',
    zhoneName: 'Coventry Grove Builders Association',
    zhoneHref: 'https://cgba.netlify.app',
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
  },
  {
    zhoneCode: 'SoC',
    zhoneName: 'Sonic Circle Shell (NEWER VERSION)',
  },
  {
    zhoneCode: 'SCA',
    zhoneName: 'Sylfan Circle Academy (OLDER VERSION)',
    zhoneHref: 'https://antiquarian-cup.netlify.app',
  },
  {
    zhoneCode: 'SyC',
    zhoneName: 'Sylvan Circle Academy (NEWER VERSION)',
    zhoneHref: 'https://sylvan-circle.netlify.app',
  },
  {
    zhoneCode: 'SCHS',
    zhoneName: '(Socratic/Slacker) Circle Home School',
  },
  {
    zhoneCode: 'CHS',
    zhoneName: 'Codified Heart Song',
  },
  {
    zhoneCode: 'OBAOLG',
    zhoneName: 'Our Builders Association Ov Layered Generalists',
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
  },
  {
    zhoneCode: 'STS',
    zhoneName: 'Shepton Transmission Services',
  },
  {
    zhoneCode: 'CMART',
    zhoneName: 'C(a/u)PMART',
    zhoneHref: 'https://fearlessly-artifactual.netlify.app',
  },
  {
    zhoneCode: 'AMOS',
    zhoneName: 'A Myriad Ov Strivings',
    zhoneHref: 'https://a-myriad-of-strivings.netlify.app',
  },
  {
    zhoneCode: 'OBALG',
    zhoneName: 'Our Builders Awakening Library Guild',
  },
])

export const sortedZhones = ref([
  getZhoneFor('JSY'),
  getZhoneFor('OBALG'),
  getZhoneFor('SC'),
  getZhoneFor('SoC'),
  getZhoneFor('SyC'),
  getZhoneFor('SCA'),
  getZhoneFor('COVENTRY'),
])

export function getZhoneFor(aZhoneCode) {
  const foundZhone
        = allZhones.value.find(zhone =>
          zhone.zhoneCode.toLowerCase()
                  === aZhoneCode.toLowerCase(),
        )

  return foundZhone
}
