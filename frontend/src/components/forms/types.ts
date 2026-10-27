import type { TripOptionKey } from '@/constants/tripsPricing'
import type { VehicleOptionKey } from '@/constants/vehiclePricing'
import type { PriceSummary } from '@/utils/priceSummary'

export type VehicleOptions = Record<VehicleOptionKey, string>

// TransferForm labels
export type TransferFormProps = {
  title: string
  subtitle: string
  fields: {
    fullName: string
    ownerEmail: string
    pickupLocation: string
    destination: string
    pickupDate: string
    pickupTime: string
    flightNumber: string
    passengers: string
    vehicle: string
    comments: string
  }
  validationMessages: {
    invalidEmail: string
    futureDate: string
  }
  vehicleOptions: VehicleOptions
  submitButton: string
}

// TripForm labels
export type TripFormProps = Omit<TransferFormProps, 'fields'> & {
  packageName?: string

  fields: Omit<TransferFormProps['fields'], 'flightNumber' | 'destination'> & {
    trip: string
    guide: string
  }

  tripOptions: Record<TripOptionKey, string>

  languajes: {
    spanish: string
    english: string
    french: string
    german: string
    italian: string
  }
  noGuide: string
}

// TransferForm data
export type TransferFormData = {
  ownerName: string
  ownerEmail: string
  pickupLocation: string
  pickupDate: string
  pickupTime: string
  destination: string
  flightNumber: string | null
  passengers: number
  vehicle: VehicleOptionKey
  comments?: string
}

// TripForm data
export type TripFormData = Omit<
  TransferFormData,
  'destination' | 'flightNumber'
> & {
  packageName: string
  guideLanguaje: string
}

// Booking payload stored before confirmation
export type TransferBooking = TransferFormData & {
  type: 'Traslado'
} & PriceSummary

export type TripBooking = TripFormData & { type: 'Viaje' } & PriceSummary

export type Booking = TransferBooking | TripBooking

// CheckBookForm types
export type CheckBookFormData = {
  bookNumber: string
}

export type CheckBookFormProps = {
  buttonText: string
  invalidNumber: string
}
