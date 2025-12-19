import type { BookingLabels } from '@/components/sections/types/types'
import type { TransferFormData, TripFormData } from '@/components/forms/types'
import SubmitBtn from '@/components/sections/details-sections/SubmitBtn'
import { useEffect, useState } from 'react'

interface BookDetailsProps {
  labels: BookingLabels
}

function BookDetails({ labels }: BookDetailsProps) {
  const [formData, setFormData] = useState<
    TransferFormData | TripFormData | null
  >(null)

  useEffect(() => {
    const storedData = localStorage.getItem('bookingData')
    if (storedData) {
      setFormData(JSON.parse(storedData))
    }
  }, [])

  if (!formData)
    return <div className="grid place-items-center py-12">No data</div>

  const isTransfer = 'destination' in formData
  const { clientInfo, pickupDetails, serviceInfo, additionalInfo } = labels

  return (
    <section>
      <div className="container mx-auto px-5 py-12">
        <div className="bg-surface mx-auto space-y-10 rounded-lg p-8 lg:w-2/3">
          {/* Datos del Cliente */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">{clientInfo.title}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-text-secondary text-sm">{clientInfo.name}</p>
                <p className="font-medium">{formData?.ownerName}</p>
              </div>
              <div>
                <p className="text-text-secondary text-sm">
                  {clientInfo.email}
                </p>
                <p className="font-medium">{formData?.ownerEmail}</p>
              </div>
            </div>
          </div>

          {/* Datos de Pickup */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">
              {pickupDetails.title}
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-text-secondary text-sm">
                  {pickupDetails.pickupLocation}
                </p>
                <p className="font-medium">{formData?.pickupLocation}</p>
              </div>
              <div>
                <p className="text-text-secondary text-sm">
                  {pickupDetails.date}
                </p>
                <p className="font-medium">{formData?.pickupDate}</p>
              </div>
              <div>
                <p className="text-text-secondary text-sm">
                  {pickupDetails.time}
                </p>
                <p className="font-medium">{formData?.pickupTime}</p>
              </div>
            </div>
          </div>

          {/* Información del Servicio */}
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
                      {(formData as TransferFormData).destination}
                    </p>
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm">
                      {serviceInfo.flightNumber}
                    </p>
                    <p className="font-medium">
                      {(formData as TransferFormData).flightNumber || '-'}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <p className="text-text-secondary text-sm">
                      {serviceInfo.trip}
                    </p>
                    <p className="font-medium">
                      {(formData as TripFormData).packageName}
                    </p>
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm">
                      {serviceInfo.guideLanguage}
                    </p>
                    <p className="font-medium">
                      {(formData as TripFormData).guideLanguaje}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Datos extra */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">
              {additionalInfo.title}
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-text-secondary text-sm">
                  {additionalInfo.passengers}
                </p>
                <p className="font-medium">{formData?.passengers}</p>
              </div>
              <div>
                <p className="text-text-secondary text-sm">
                  {additionalInfo.vehicle}
                </p>
                <p className="font-medium">{formData?.vehicle}</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-text-secondary text-sm">
                {additionalInfo.comments}
              </p>
              <p className="font-medium">{formData?.comments || '-'}</p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
              <SubmitBtn formData={formData} isTransfer={isTransfer} text={labels.submitButton} />
          </div>
      </div>
    </section>
  )
}

export default BookDetails
