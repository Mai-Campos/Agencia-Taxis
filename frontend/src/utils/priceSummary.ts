import { getGuidePrice } from '@/constants/guidePricing'
import { getTripPrice } from '@/constants/tripsPricing'
import { getVehiclePrice } from '@/constants/vehiclePricing'

export type PriceSummaryInput = {
  trip?: string
  vehicle?: string
  guideLanguage?: string
}

export type PriceSummary = {
  tripPrice: number
  vehiclePrice: number
  guidePrice: number
  total: number
}

export const priceSummary = ({
  trip,
  vehicle,
  guideLanguage,
}: PriceSummaryInput): PriceSummary => {
  const tripPrice = getTripPrice(trip)
  const vehiclePrice = getVehiclePrice(vehicle)
  const guidePrice = getGuidePrice(guideLanguage)

  return {
    tripPrice,
    vehiclePrice,
    guidePrice,
    total: tripPrice + vehiclePrice + guidePrice,
  }
}
