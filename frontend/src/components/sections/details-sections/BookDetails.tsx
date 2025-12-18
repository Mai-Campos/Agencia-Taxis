import type {
  bookDetails,
  bookingData,
} from '@/components/sections/types/types'

interface BookDetailsProps {
  bookDetails: bookDetails
  bookingData: bookingData
}

function BookDetails({ bookDetails, bookingData }: BookDetailsProps) {
  const { clientInfo, pickupDetails, serviceInfo, additionalInfo } = bookDetails

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
                <p className="font-medium">{bookingData.clientInfo.name}</p>
              </div>
              <div>
                <p className="text-text-secondary text-sm">
                  {clientInfo.email}
                </p>
                <p className="font-medium">{bookingData.clientInfo.email}</p>
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
                  {bookingData.pickupDetails.pickupLocation}
                </p>
              </div>

              <div>
                <p className="text-text-secondary text-sm">
                  {pickupDetails.date}
                </p>
                <p className="font-medium">{bookingData.pickupDetails.date}</p>
              </div>

              <div>
                <p className="text-text-secondary text-sm">
                  {pickupDetails.time}
                </p>
                <p className="font-medium">{bookingData.pickupDetails.time}</p>
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
                <p className="font-medium">
                  {bookingData.serviceInfo.destination}
                </p>
              </div>

              {/* Solo aparece si es Traslado */}
              <div>
                <p className="text-text-secondary text-sm">
                  {serviceInfo.flightNumber}
                </p>
                <p className="font-medium">
                  {bookingData.serviceInfo.flightNumber}
                </p>
              </div>

              {/* Solo aparece si es Recorrido */}
              <div>
                <p className="text-text-secondary text-sm">
                  {serviceInfo.trip}
                </p>
                <p className="font-medium">{bookingData.serviceInfo.trip}</p>
              </div>

              {/* Solo aparece si es Recorrido */}
              <div>
                <p className="text-text-secondary text-sm">
                  {serviceInfo.guideLanguage}
                </p>
                <p className="font-medium">
                  {bookingData.serviceInfo.guideLanguage}
                </p>
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
                <p className="font-medium">
                  {bookingData.additionalInfo.passengers}
                </p>
              </div>
              <div>
                <p className="text-text-secondary text-sm">
                  {additionalInfo.vehicle}
                </p>
                <p className="font-medium">
                  {bookingData.additionalInfo.vehicle}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-text-secondary text-sm">
                {additionalInfo.comments}
              </p>
              <p className="font-medium">
                {bookingData.additionalInfo.comments}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default BookDetails
