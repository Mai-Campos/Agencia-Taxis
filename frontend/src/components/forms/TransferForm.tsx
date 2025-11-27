import { useForm } from 'react-hook-form'
import type {
  TransferFormData,
  TransferFormProps,
} from '@/components/forms/types'
import { submitTransfer } from '@/api/transfers'

function TransferForm({
  title,
  subtitle,
  fields,
  validationMessages,
  vehicleOptions,
  submitButton,
}: TransferFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TransferFormData>({
    defaultValues: {
      passengers: 1,
    },
  })

  const onSubmit = handleSubmit(async (data) => {
    const payload = {
      type: 'Traslado',
      ...data,
    }
    try {
      const resData = await submitTransfer(payload)
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

          {/* Destino */}
          <div className="w-full p-2 sm:w-1/2">
            <label className="text-text-secondary text-sm leading-7">
              {fields.destination}
              <input
                type="text"
                className={
                  errors.destination ? 'input-error' : 'input-component'
                }
                {...register('destination', {
                  required: true,
                })}
              />
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

          {/* Número de vuelo */}
          <div className="w-full p-2 sm:w-1/3">
            <label className="text-text-secondary text-sm leading-7">
              {fields.flightNumber}
              <input
                className="input-component"
                {...register('flightNumber')}
              />
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
                  valueAsNumber: true,
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

export default TransferForm
