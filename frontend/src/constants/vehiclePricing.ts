export type Vehicle = {
  label: string
  price: number
}

export const VEHICLES = {
  van: { label: 'van', price: 150 },
  classicCar: { label: 'classicCar', price: 100 },
  taxi: { label: 'taxi', price: 120 },
} as const satisfies Record<string, Vehicle>

export type VehicleOptionKey = keyof typeof VEHICLES

export const DEFAULT_VEHICLE: VehicleOptionKey = 'van'

export const VEHICLE_OPTIONS = Object.fromEntries(
  Object.entries(VEHICLES).map(([key, { label }]) => [key, label])
) as Record<VehicleOptionKey, string>

export const VEHICLE_PRICES = Object.fromEntries(
  Object.entries(VEHICLES).map(([key, { price }]) => [key, price])
) as Record<VehicleOptionKey, number>

export const getVehiclePrice = (vehicle?: string) =>
  vehicle && vehicle in VEHICLES
    ? VEHICLES[vehicle as VehicleOptionKey].price
    : 0
