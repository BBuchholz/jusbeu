import { ref } from 'vue'

export const allZhones = ref([
  {
    zhoneCode: 'COVENTRY',
    zhoneName: 'Coventry Grove Builders Association',
    zhoneHref: '#',
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
    zhoneName: 'Our Benevolent Awakening Lore Guild',
  },
])

export const sortedZhones = ref([
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
