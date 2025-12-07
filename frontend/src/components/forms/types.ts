// data que envia el formulario de Traslados
export type TransferFormData = {
  ownerName: string
  ownerEmail: string
  pickupLocation: string
  pickupDate: string
  pickupTime: string
  destination: string
  flightNumber: string | null
  passengers: number
  vehicle: string
  comments?: string
}

// data que envia el formulario de Recorridos
export type TripFormData = Omit<
  TransferFormData,
  'destination' | 'flightNumber'
> & {
  packageName: string
  guideLanguaje: string
}

// data de textos
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
  vehicleOptions: {
    taxi: string
    classicCar: string
    van: string
  }
  validationMessages: {
    invalidEmail: string
    futureDate: string
  }
  submitButton: string
}

// data de textos
export type TripFormProps = Omit<TransferFormProps, 'fields'> & {
  packageName?: string

  fields: Omit<TransferFormProps['fields'], 'flightNumber' | 'destination'> & {
    trip: string
    guide: string
  }

  tripOptions: {
    baracoa: string
    cayoCoco: string
    cienfuegosPerla: string
    havanaVieja: string
    santaClaraChe: string
    santiagoCuba: string
    trinidadColonial: string
    varaderoPlaya: string
    vinalesMogotes: string
  }

  languajes: {
    spanish: string
    english: string
    french: string
    german: string
    italian: string
  }
  noGuide: string
}

export type CheckBookFormData = {
  bookNumber: string
}

export type CheckBookFormProps = {
    buttonText: string
    invalidNumber: string
}