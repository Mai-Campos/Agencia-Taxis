import { submitBook } from '@/api/reservations'
import type { Booking } from '@/components/forms/types'
import { localePathname } from '@/utils/localePathname'

type SubmitBtnProps = {
  formData: Booking | null
  text: string
  successMessage: string
  errorMessage: string
}

function SubmitBtn({
  formData,
  text,
  successMessage,
  errorMessage,
}: SubmitBtnProps) {
  const onSubmit = async () => {
    if (!formData) return

    try {
      await submitBook(formData)
      alert(successMessage)

      // Clean localStorage and go back to the home page in the current locale
      localStorage.removeItem('bookingData')
      localePathname('')
    } catch (err) {
      console.error('Error:', err)
      alert(errorMessage)
    }
  }

  return (
    <button onClick={onSubmit} className="cta-btn" disabled={!formData}>
      {text}
    </button>
  )
}

export default SubmitBtn
