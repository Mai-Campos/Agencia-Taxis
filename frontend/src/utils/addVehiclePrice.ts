import { VEHICLE_PRICING, type VehicleType } from '@/constants/vehiclePricing'

export const addVehiclePrice = (
  basePrice: number,
  vehicleType: VehicleType
) => {
  return basePrice + VEHICLE_PRICING[vehicleType]
}
