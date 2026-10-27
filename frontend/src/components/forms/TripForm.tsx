import type {
  TripBooking,
  TripFormData,
  TripFormProps,
} from '@/components/forms/types'
import { localePathname } from '@/utils/localePathname'
import { useForm } from 'react-hook-form'
import { DEFAULT_TRIP, getTripKey } from '@/constants/tripsPricing'
import { DEFAULT_VEHICLE } from '@/constants/vehiclePricing'
import { NO_GUIDE } from '@/constants/guidePricing'
import { priceSummary } from '@/utils/priceSummary'

function TripForm({
  packageName,
  title,
  subtitle,
  fields,
  vehicleOptions,
  tripOptions,
  validationMessages,
  noGuide,
  languajes,
  submitButton,
}: TripFormProps) {
  const defaultPackage = getTripKey(packageName) ?? DEFAULT_TRIP

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TripFormData>({
    defaultValues: {
      passengers: 1,
      packageName: defaultPackage,
      vehicle: DEFAULT_VEHICLE,
      guideLanguaje: NO_GUIDE,
    },
  })

  const onSubmit = handleSubmit((data) => {
    const prices = priceSummary({
      trip: data.packageName,
      vehicle: data.vehicle,
      guideLanguage: data.guideLanguaje,
    })

    const payload: TripBooking = { type: 'Viaje', ...data, ...prices }

    // Save the selection and its prices, then redirect to the confirm page
    localStorage.setItem('bookingData', JSON.stringify(payload))
    localePathname('confirm-book')
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
          {/* Full Name */}
          <div className="w-full p-2 sm:w-1/2">
            <label className="text-text-secondary text-sm leading-7">
              {fields.fullName}
              <input
                type="text"
                className={errors.ownerName ? 'input-error' : 'input-component'}
                {...register('ownerName', { required: true })}
              />
            </label>
          </div>

          {/* Email */}
          <div className="w-full p-2 sm:w-1/2">
            <label className="text-text-secondary text-sm leading-7">
              {fields.ownerEmail}
              <input
                type="email"
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

          {/* Pickup Location */}
          <div className="w-full p-2 sm:w-1/2">
            <label className="text-text-secondary text-sm leading-7">
              {fields.pickupLocation}
              <input
                type="text"
                className={
                  errors.pickupLocation ? 'input-error' : 'input-component'
                }
                {...register('pickupLocation', { required: true })}
              />
            </label>
          </div>

          {/* Trip Package */}
          <div className="w-2/2 p-2 sm:w-1/2">
            <label className="text-text-secondary text-sm leading-7">
              {fields.trip}
              <select
                className={
                  errors.packageName ? 'input-error' : 'input-component'
                }
                {...register('packageName', { required: true })}
              >
                {Object.entries(tripOptions).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Date */}
          <div className="w-full p-2 sm:w-1/2">
            <label className="text-text-secondary text-sm leading-7">
              {fields.pickupDate}
              <input
                type="date"
                className={
                  errors.pickupDate ? 'input-error' : 'input-component'
                }
                {...register('pickupDate', { required: true })}
              />
            </label>
          </div>

          {/* Time */}
          <div className="w-full p-2 sm:w-1/2">
            <label className="text-text-secondary text-sm leading-7">
              {fields.pickupTime}
              <input
                type="time"
                className={
                  errors.pickupTime ? 'input-error' : 'input-component'
                }
                {...register('pickupTime', { required: true })}
              />
            </label>
          </div>

          {/* Guide Language */}
          <div className="w-full p-2 sm:w-1/3">
            <label className="text-text-secondary text-sm leading-7">
              {fields.guide}
              <select
                className="input-component"
                {...register('guideLanguaje')}
              >
                <option value="noGuide">{noGuide}</option>
                {Object.entries(languajes).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Passengers */}
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

          {/* Vehicle */}
          <div className="w-full p-2 sm:w-1/3">
            <label className="text-text-secondary text-sm leading-7">
              {fields.vehicle}
              <select className="input-component" {...register('vehicle')}>
                {Object.entries(vehicleOptions).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Comments */}
          <div className="w-full p-2">
            <label className="text-text-secondary text-sm leading-7">
              {fields.comments}
              <textarea
                className="textarea-component textarea-scroll"
                spellCheck="false"
                {...register('comments')}
              />
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
