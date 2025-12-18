import type {
  bookingLabels,
  bookingData,
} from '@/components/sections/types/types'

interface BookDetailsProps {
  labels: bookingLabels
  data: bookingData | null
}

function BookDetails({ labels, data }: BookDetailsProps) {
  if (!data) return null

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
                <p className="font-medium">{data.clientInfo.name}</p>
              </div>
              <div>
                <p className="text-text-secondary text-sm">
                  {clientInfo.email}
                </p>
                <p className="font-medium">{data.clientInfo.email}</p>
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
                <p className="font-medium">
                  {data.pickupDetails.pickupLocation}
                </p>
              </div>

              <div>
                <p className="text-text-secondary text-sm">
                  {pickupDetails.date}
                </p>
                <p className="font-medium">{data.pickupDetails.date}</p>
              </div>

              <div>
                <p className="text-text-secondary text-sm">
                  {pickupDetails.time}
                </p>
                <p className="font-medium">{data.pickupDetails.time}</p>
              </div>
            </div>
          </div>

          {/* Información del Servicio */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">{serviceInfo.title}</h2>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Solo aparece si es Traslado */}
              <div>
                <p className="text-text-secondary text-sm">
                  {serviceInfo.destination}
                </p>
                <p className="font-medium">{data.serviceInfo.destination}</p>
              </div>

              {/* Solo aparece si es Traslado */}
              <div>
                <p className="text-text-secondary text-sm">
                  {serviceInfo.flightNumber}
                </p>
                <p className="font-medium">{data.serviceInfo.flightNumber}</p>
              </div>

              {/* Solo aparece si es Recorrido */}
              <div>
                <p className="text-text-secondary text-sm">
                  {serviceInfo.trip}
                </p>
                <p className="font-medium">{data.serviceInfo.trip}</p>
              </div>

              {/* Solo aparece si es Recorrido */}
              <div>
                <p className="text-text-secondary text-sm">
                  {serviceInfo.guideLanguage}
                </p>
                <p className="font-medium">{data.serviceInfo.guideLanguage}</p>
              </div>
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
                <p className="font-medium">{data.additionalInfo.passengers}</p>
              </div>
              <div>
                <p className="text-text-secondary text-sm">
                  {additionalInfo.vehicle}
                </p>
                <p className="font-medium">{data.additionalInfo.vehicle}</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-text-secondary text-sm">
                {additionalInfo.comments}
              </p>
              <p className="font-medium">{data.additionalInfo.comments}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default BookDetails
