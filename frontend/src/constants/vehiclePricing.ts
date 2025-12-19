export const VEHICLE_PRICING = {
  VAN: 80,
  CLASSIC_CAR: 100,
  TAXI: 120,
} as const

export type VehicleType = keyof typeof VEHICLE_PRICING
