import { ref } from 'vue'

export const allZhones = ref([
  {
    zhoneCode: 'COVENTRY',
    zhoneName: 'Coventry Grove Builders Association',
    zhoneHref: '#',
  },
  {
    zhoneCode: 'JSY',
    zhoneName: 'Jacob\'s Salvage Yard',
    zhoneHref: 'https://extremely-daemonic-gate.netlify.app/',
    zhoneImgSrc: 'https://madamadam.s3.us-east-2.amazonaws.com/JSY-5bd4_CARD.png',
  },
  {
    zhoneCode: 'SC',
    zhoneName: 'Sonic Circle',
  },
  {
    zhoneCode: 'SC',
    zhoneName: 'Sonic Circle',
  },
  {
    zhoneCode: 'SCA',
    zhoneName: 'Sylvan Circle Academy',
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
