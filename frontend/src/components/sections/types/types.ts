export type bookingLabels = {
  clientInfo: {
    title: string
    name: string
    email: string
  }
  pickupDetails: {
    title: string
    pickupLocation: string
    date: string
    time: string
  }
  serviceInfo: {
    title: string
    destination: string
    trip: string
    flightNumber: string
    guideLanguage: string
  }
  additionalInfo: {
    title: string
    passengers: string
    vehicle: string
    comments: string
  }
}

export type bookingData = {
  clientInfo: {
    name: string
    email: string
  }
  pickupDetails: {
    pickupLocation: string
    date: string
    time: string
  }
  serviceInfo: {
    destination?: string
    trip?: string
    flightNumber?: string
    guideLanguage?: string
  }
  additionalInfo: {
    passengers: number
    vehicle: string
    comments?: string
  }
}
