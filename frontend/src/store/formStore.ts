import { atom } from 'nanostores'
import type { TransferFormData, TripFormData } from '@/components/forms/types'

// transfer form
export const transferFormStore = atom<{
  transferFormData: TransferFormData | null
}>({
  transferFormData: null,
})

export const setTransferFormData = (data: TransferFormData) => {
  transferFormStore.set({ transferFormData: data })
}

export const clearTransferFormData = () => {
  transferFormStore.set({ transferFormData: null })
}

// trip form
export const tripFormStore = atom<{ tripFormData: TripFormData | null }>({
  tripFormData: null,
})

export const setTripFormData = (data: TripFormData) => {
  tripFormStore.set({ tripFormData: data })
}

export const clearTripFormData = () => {
  tripFormStore.set({ tripFormData: null })
}
