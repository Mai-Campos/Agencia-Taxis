import type { Booking, TransferBooking } from '@/components/forms/types'
import type {
  BookingLabels,
  BookingOptions,
} from '@/components/sections/types/types'
import SubmitBtn from '@/components/sections/details-sections/SubmitBtn'
import { NO_GUIDE } from '@/constants/guidePricing'
import { findTrip, getTripKey } from '@/constants/tripsPricing'
import { priceSummary } from '@/utils/priceSummary'
import { useEffect, useState } from 'react'

interface BookDetailsProps {
  labels: BookingLabels
  options: BookingOptions
  lang: string
}

const formatDate = (value: string | undefined, lang: string) => {
  if (!value) return '-'

  const date = new Date(`${value}T00:00:00`)

  return Number.isNaN(date.getTime()) ? value : date.toLocaleDateString(lang)
}

function BookDetails({ labels, options, lang }: BookDetailsProps) {
  const [booking, setBooking] = useState<Booking | null>(null)

  useEffect(() => {
    const storedData = localStorage.getItem('bookingData')
    if (!storedData) return

    try {
      setBooking(JSON.parse(storedData) as Booking)
    } catch {
      localStorage.removeItem('bookingData')
    }
  }, [])

  if (!booking)
    return <div className="grid place-items-center py-12">{labels.noData}</div>

  const isTransfer = booking.type === 'Traslado'
  const tripKey =
    booking.type === 'Viaje' ? getTripKey(booking.packageName) : undefined
  const tripLabel =
    booking.type === 'Viaje'
      ? (options.tripOptions[tripKey ?? ''] ??
        findTrip(booking.packageName)?.label ??
        booking.packageName)
      : ''
  const guideLabel =
    booking.type === 'Viaje'
      ? booking.guideLanguaje && booking.guideLanguaje !== NO_GUIDE
        ? (options.languajes[booking.guideLanguaje] ?? booking.guideLanguaje)
        : options.noGuide
      : ''
  const vehicleLabel =
    options.vehicleOptions[booking.vehicle] ?? booking.vehicle
  const prices = priceSummary({
    trip: booking.type === 'Viaje' ? booking.packageName : undefined,
    vehicle: booking.vehicle,
    guideLanguage: booking.type === 'Viaje' ? booking.guideLanguaje : undefined,
  })

  const { clientInfo, pickupDetails, serviceInfo, additionalInfo } = labels

  return (
    <section>
      <div className="container mx-auto px-5 py-12">
        <div className="bg-surface mx-auto space-y-10 rounded-lg p-8 lg:w-2/3">
          {/* Owner Data */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">{clientInfo.title}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-text-secondary text-sm">{clientInfo.name}</p>
                <p className="font-medium">{booking.ownerName}</p>
              </div>
              <div>
                <p className="text-text-secondary text-sm">
                  {clientInfo.email}
                </p>
                <p className="font-medium">{booking.ownerEmail}</p>
              </div>
            </div>
          </div>

          {/* Pickup Data */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">
              {pickupDetails.title}
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-text-secondary text-sm">
                  {pickupDetails.pickupLocation}
                </p>
                <p className="font-medium">{booking.pickupLocation}</p>
              </div>
              <div>
                <p className="text-text-secondary text-sm">
                  {pickupDetails.date}
                </p>
                <p className="font-medium">
                  {formatDate(booking.pickupDate, lang)}
                </p>
              </div>
              <div>
                <p className="text-text-secondary text-sm">
                  {pickupDetails.time}
                </p>
                <p className="font-medium">{booking.pickupTime}</p>
              </div>
            </div>
          </div>

          {/* Service Info */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">{serviceInfo.title}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {isTransfer ? (
                <>
                  <div>
                    <p className="text-text-secondary text-sm">
                      {serviceInfo.destination}
                    </p>
                    <p className="font-medium">
                      {(booking as TransferBooking).destination}
                    </p>
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm">
                      {serviceInfo.flightNumber}
                    </p>
                    <p className="font-medium">
                      {(booking as TransferBooking).flightNumber || '-'}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <p className="text-text-secondary text-sm">
                      {serviceInfo.trip}
                    </p>
                    <p className="font-medium">{tripLabel}</p>
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm">
                      {serviceInfo.guideLanguage}
                    </p>
                    <p className="font-medium">{guideLabel}</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Extra */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">
              {additionalInfo.title}
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-text-secondary text-sm">
                  {additionalInfo.passengers}
                </p>
                <p className="font-medium">{booking.passengers}</p>
              </div>
              <div>
                <p className="text-text-secondary text-sm">
                  {additionalInfo.vehicle}
                </p>
                <p className="font-medium">{vehicleLabel}</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-text-secondary text-sm">
                {additionalInfo.comments}
              </p>
              <p className="font-medium">{booking.comments || '-'}</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-lg font-semibold">
              {labels.totalPrice}: ${prices.total}
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <SubmitBtn
            formData={booking}
            text={labels.submitButton}
            successMessage={labels.successMessage}
            errorMessage={labels.errorMessage}
          />
        </div>
      </div>
    </section>
  )
}

export default BookDetails
