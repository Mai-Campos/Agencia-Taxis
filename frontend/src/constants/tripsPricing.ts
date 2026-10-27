export type Trip = {
  label: string
  price: number
}

export const TRIPS = {
  baracoa: { label: 'baracoa', price: 560 },
  cayoCoco: { label: 'cayo-coco', price: 620 },
  cienfuegosPerla: { label: 'cienfuegos-perla', price: 450 },
  havanaVieja: { label: 'havana-vieja', price: 500 },
  santaClaraChe: { label: 'santa-clara-che', price: 390 },
  santiagoCuba: { label: 'santiago-cuba', price: 480 },
  trinidadColonial: { label: 'trinidad-colonial', price: 470 },
  varaderoPlaya: { label: 'varadero-playa', price: 530 },
  vinalesMogotes: { label: 'vinales-mogotes', price: 420 },
} as const satisfies Record<string, Trip>

export type TripOptionKey = keyof typeof TRIPS

export const DEFAULT_TRIP: TripOptionKey = 'baracoa'

export const TRIP_OPTIONS = Object.fromEntries(
  Object.entries(TRIPS).map(([key, { label }]) => [key, label])
) as Record<TripOptionKey, string>

export const TRIP_PRICES = Object.fromEntries(
  Object.entries(TRIPS).map(([key, { price }]) => [key, price])
) as Record<TripOptionKey, number>

export const findTrip = (keyOrSlug?: string) => {
  if (!keyOrSlug) return undefined

  return (
    TRIPS[keyOrSlug as TripOptionKey] ??
    Object.values(TRIPS).find((trip) => trip.label === keyOrSlug)
  )
}

export const getTripKey = (keyOrSlug?: string): TripOptionKey | undefined => {
  if (!keyOrSlug) return undefined
  if (keyOrSlug in TRIPS) return keyOrSlug as TripOptionKey

  return (Object.keys(TRIPS) as TripOptionKey[]).find(
    (key) => TRIPS[key].label === keyOrSlug
  )
}

export const getTripPrice = (keyOrSlug?: string) =>
  findTrip(keyOrSlug)?.price ?? 0
