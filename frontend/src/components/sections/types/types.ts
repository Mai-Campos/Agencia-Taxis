export type bookDetails = {
  title: string
  subtitle: string
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
