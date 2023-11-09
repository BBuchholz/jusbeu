import { ref } from 'vue'

export const allZhones = ref([
  {
    zhoneCode: 'COVENTRY',
    zhoneName: 'Coventry Grove Builders Association',
  },
  {
    zhoneCode: 'SC',
    zhoneName: 'Sonic Circle',
  },
  {
    zhoneCode: 'SCA',
    zhoneName: 'Sylvan Circle Academy',
  },
])

export function getZhoneFor(aZhoneCode) {
  const foundZhone
        = allZhones.value.find(zhone =>
          zhone.zhoneCode.toLowerCase()
                  === aZhoneCode.toLowerCase(),
        )

  return foundZhone
}
