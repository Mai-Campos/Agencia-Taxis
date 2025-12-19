import { GUIDE_PRICING } from '@/constants/guidePricing'

export const addGuidePrice = (basePrice: number) => {
  const addGuide = basePrice + GUIDE_PRICING.BASE_PRICE

  return addGuide
}
