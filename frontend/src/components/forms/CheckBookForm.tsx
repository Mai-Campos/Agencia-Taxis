import type {
  CheckBookFormProps,
  CheckBookFormData,
} from '@/components/forms/types'
import { checkBook } from '@/api/checkBook'
import { useForm } from 'react-hook-form'

function CheckBookForm({ buttonText, invalidNumber }: CheckBookFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CheckBookFormData>()

  const onSubmit = handleSubmit(async (data) => {
    console.log(data.bookNumber)
    try {
      const resData = await checkBook(data.bookNumber)
      console.log('Response:', resData)
      reset()
    } catch (err) {
      console.error('Error:', err)
    }
  })

  return (
    <>
      <form
        noValidate
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <input
          {...register('bookNumber', {
            required: true,
          })}
          type="text"
          className={errors.bookNumber ? 'input-error' : 'input-component'}
        />

        <button className="cta-btn">{buttonText}</button>
      </form>
      {/* {errors.id && (
        <span className="-mt-5 font-semibold text-red-500">
          {invalidNumber}
        </span>
      )} */}
    </>
  )
}

export default CheckBookForm
