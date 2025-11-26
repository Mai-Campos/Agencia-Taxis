import { useForm } from 'react-hook-form'

interface TripFormData {
  ownerName: string
  email: string
  pickupLocation: string
  packageName: string
  pickupDate: string
  pickupTime: string
  passengers: number
  vehicleType: string
  guideLanguaje: string
  comments?: string
}

interface TripFormProps {
  packageName?: string
  title: string
  subtitle: string
  fields: {
    fullName: string
    email: string
    pickupLocation: string
    trip: string
    pickupDate: string
    pickupTime: string
    passengers: string
    vehicle: string
    guide: string
    comments: string
  }
  vehicleOptions: {
    taxi: string
    classicCar: string
    van: string
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
  validationMessages: {
    invalidEmail: string
    futureDate: string
  }
  submitButton: string
}

function TripForm({
  packageName,
  title,
  subtitle,
  fields,
  validationMessages,
  vehicleOptions,
  tripOptions,
  languajes,
  submitButton,
}: TripFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TripFormData>()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    reset()
  })

  return (
    <section className="body-font container mx-auto px-5 py-18">
      <div className="mb-12 flex w-full flex-col text-center">
        <h1 className="title-font mb-2 text-2xl font-bold sm:text-3xl">
          {title}
        </h1>
        <p className="text-text-secondary mx-auto text-base lg:w-2/3">
          {subtitle}
        </p>
      </div>

      <div className="mx-auto md:w-2/3 lg:w-1/2">
        <form onSubmit={onSubmit} noValidate className="-m-2 flex flex-wrap">
          {/* Nombre completo */}
          <div className="w-full p-2 sm:w-1/2">
            <label className="text-text-secondary text-sm leading-7">
              {fields.fullName}
              <input
                type="text"
                className={errors.ownerName ? 'input-error' : 'input-component'}
                {...register('ownerName', {
                  required: true,
                })}
              />
            </label>
          </div>

          {/* Correo electrónico */}
          <div className="w-full p-2 sm:w-1/2">
            <label className="text-text-secondary text-sm leading-7">
              {fields.email}
              {errors.email && (
                <span className="absolute ml-2 font-semibold text-red-500">
                  {errors.email.message}
                </span>
              )}
              <input
                type="email"
                className={errors.email ? 'input-error' : 'input-component'}
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: validationMessages.invalidEmail,
                  },
                })}
              />
            </label>
          </div>

          {/* Lugar de recogida */}
          <div className="w-full p-2 sm:w-1/2">
            <label className="text-text-secondary text-sm leading-7">
              {fields.pickupLocation}
              <input
                type="text"
                className={
                  errors.pickupLocation ? 'input-error' : 'input-component'
                }
                {...register('pickupLocation', {
                  required: true,
                })}
              />
            </label>
          </div>

          {/* Recorrido (Nombre del paquete) */}
          <div className="w-1/2 p-2">
            <label className="text-text-secondary text-sm leading-7">
              {fields.trip}
              <select className="input-component" {...register('packageName')}>
                {Object.entries(tripOptions).map((v) => (
                  <option key={v[0]} value={v[0]}>
                    {v[1]}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Fecha de recogida */}
          <div className="w-1/2 p-2">
            <label className="text-text-secondary text-sm leading-7">
              {fields.pickupDate}
              <input
                type="date"
                className={
                  errors.pickupDate ? 'input-error' : 'input-component'
                }
                {...register('pickupDate', {
                  required: true,
                  validate: (value) => {
                    const inputValue = new Date(value)
                    const currentDate = new Date()
                    currentDate.setHours(0, 0, 0, 0)

                    return (
                      inputValue >= currentDate || validationMessages.futureDate
                    )
                  },
                })}
              />
            </label>
          </div>

          {/* Hora de recogida */}
          <div className="w-1/2 p-2">
            <label className="text-text-secondary text-sm leading-7">
              {fields.pickupTime}
              <input
                type="time"
                className={
                  errors.pickupTime ? 'input-error' : 'input-component'
                }
                {...register('pickupTime', {
                  required: true,
                })}
              />
            </label>
          </div>

          {/* Guía Turístico */}
          <div className="w-full p-2 sm:w-1/3">
            <label className="text-text-secondary text-sm leading-7">
              {fields.guide}
              <select
                className="input-component"
                {...register('guideLanguaje')}
              >
                {Object.entries(languajes).map((g) => (
                  <option key={g[0]} value={g[0]}>
                    {g[1]}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Cantidad de pasajeros */}
          <div className="w-1/2 p-2 sm:w-1/3">
            <label className="text-text-secondary text-sm leading-7">
              {fields.passengers}
              <input
                type="number"
                className={
                  errors.passengers ? 'input-error' : 'input-component'
                }
                {...register('passengers', {
                  required: true,
                })}
              />
            </label>
          </div>

          {/* Tipo de vehículo */}
          <div className="w-1/2 p-2 sm:w-1/3">
            <label className="text-text-secondary text-sm leading-7">
              {fields.vehicle}
              <select className="input-component" {...register('vehicleType')}>
                {Object.entries(vehicleOptions).map((v) => (
                  <option key={v[0]} value={v[0]}>
                    {v[1]}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Detalles opcionales */}
          <div className="w-full p-2">
            <label className="text-text-secondary text-sm leading-7">
              {fields.comments}
              <textarea
                className="textarea-component"
                {...register('comments')}
              ></textarea>
            </label>
          </div>

          <div className="flex w-full items-center justify-center p-2">
            <button type="submit" className="cta-btn">
              {submitButton}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default TripForm
