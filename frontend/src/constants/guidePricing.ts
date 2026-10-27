export const GUIDE_PRICING = {
  BASE_PRICE: 30,
} as const

export const NO_GUIDE = 'noGuide'

export const getGuidePrice = (guideLanguage?: string) => {
  if (!guideLanguage || guideLanguage === NO_GUIDE) return 0

  return GUIDE_PRICING.BASE_PRICE
}
