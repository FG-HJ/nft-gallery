import type { Prefix } from '@kodadot1/static'
import type { ComputedRef } from 'vue'

export default function (prefix: ComputedRef<Prefix>) {
  const isRemark = computed(
    () => prefix.value === 'rmrk' || prefix.value === 'ksm',
  )

  const isRmrk = computed(() => prefix.value === 'rmrk')

  const isAssetHub = computed(
    () => prefix.value === 'ahk' || prefix.value === 'ahp', //|| prefix.value === 'ahr'
  )

  const isBase = computed(() => 'base' === prefix.value)

  return {
    isRemark,
    isAssetHub,
    isRmrk,
    isBase,
  }
}
