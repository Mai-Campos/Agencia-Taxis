import {atom} from 'nanostores'
import type {TransferFormData} from '@/components/forms/types'

export const transferFormStore = atom<{transferFormData: TransferFormData | null}>({
    transferFormData: null,
})

export const setTransferFormData = (data: TransferFormData) => {
  transferFormStore.set({ transferFormData: data })
}

export const clearTransferFormData = () => {
  transferFormStore.set({ transferFormData: null })
}