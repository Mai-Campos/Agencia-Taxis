import type { TripFormData, TripFormProps } from '@/components/forms/types'
import { submitTrip } from '@/api/trips'
import { useForm } from 'react-hook-form'

function TripForm({
  packageName,
  title,
  subtitle,
  fields,
  validationMessages,
  vehicleOptions,
  tripOptions,
  noGuide,
  languajes,
  submitButton,
}: TripFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TripFormData>({
    defaultValues: {
      passengers: 1,
      packageName: packageName ?? '',
    },
  })

  const onSubmit = handleSubmit(async (data) => {
    const withGuide = data.guideLanguaje !== 'noGuide'

    const { guideLanguaje, ...cleaned } = data
    const payload = {
      type: 'Recorrido',
      withGuide,
      languaje: withGuide ? data.guideLanguaje : null,
      ...cleaned,
    }
    console.log(payload)
    try {
      const resData = await submitTrip(payload)
      console.log('Response:', resData)
      reset()
    } catch (err) {
      console.error('Error:', err)
    }
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
              {fields.ownerEmail}
              {errors.ownerEmail && (
                <span className="absolute ml-2 font-semibold text-red-500">
                  {errors.ownerEmail.message}
                </span>
              )}
              <input
                type="ownerEmail"
                className={
                  errors.ownerEmail ? 'input-error' : 'input-component'
                }
                {...register('ownerEmail', {
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
          <div className="w-2/2 p-2 sm:w-1/2">
            <label className="text-text-secondary text-sm leading-7">
              {fields.trip}
              <select
                className={
                  errors.packageName ? 'input-error' : 'input-component'
                }
                {...register('packageName', {
                  required: true,
                })}
              >
                {Object.entries(tripOptions).map((v) => (
                  <option key={v[0]} value={v[0]}>
                    {v[1]}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Fecha de recogida */}
          <div className="w-full p-2 sm:w-1/2">
            <label className="text-text-secondary text-sm leading-7">
              {fields.pickupDate}
              <input
                type="date"
                className={
                  errors.pickupDate ? 'input-error' : 'input-component'
                }
                {...register('pickupDate', {
                  required: true,
                  valueAsDate: true,
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
          <div className="w-full p-2 sm:w-1/2">
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
                <option value="noGuide">{noGuide}</option>
                {Object.entries(languajes).map((g) => (
                  <option key={g[0]} value={g[0]}>
                    {g[1]}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Cantidad de pasajeros */}
          <div className="w-full p-2 sm:w-1/3">
            <label className="text-text-secondary text-sm leading-7">
              {fields.passengers}
              <input
                type="number"
                className={
                  errors.passengers ? 'input-error' : 'input-component'
                }
                {...register('passengers', {
                  required: true,
                  valueAsNumber: true,
                })}
              />
            </label>
          </div>

          {/* Tipo de vehículo */}
          <div className="w-full p-2 sm:w-1/3">
            <label className="text-text-secondary text-sm leading-7">
              {fields.vehicle}
              <select className="input-component" {...register('vehicle')}>
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
                className="textarea-component textarea-scroll"
                spellCheck="false"
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
