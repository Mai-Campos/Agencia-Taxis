export const GUIDE_PRICING = {
  BASE_PRICE: 30,
} as const;

export type GuideLanguage = keyof typeof GUIDE_PRICING;