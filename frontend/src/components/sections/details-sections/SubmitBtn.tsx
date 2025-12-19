import { submitBook } from '@/api/reservations'
import { useForm } from 'react-hook-form'
import type { TransferFormData, TripFormData } from '@/components/forms/types'

type SubmitBtnProps = {
    formData: TransferFormData | TripFormData | null
    isTransfer: boolean
}

function SubmitBtn({ formData, isTransfer }: SubmitBtnProps) {

  const onSubmit = async () => {
    if (!formData) {
      alert('No hay datos para enviar')
      return
    }

    try {
      if (isTransfer) {
        await submitBook(formData as TransferFormData)
      } else {
        await submitBook(formData as TripFormData)
      }
      alert('Reserva enviada correctamente')
      localStorage.removeItem('bookingData') // Limpiar storage
      // Redirigir a la página principal
      window.location.href = window.location.origin
    } catch (err) {
      console.error('Error:', err)
      alert('Error al enviar la reserva')
    }
  }

  return (
    <button 
      onClick={onSubmit} 
      className='cta-btn'
      disabled={!formData}
    >
      Confirmar Reserva
    </button>
  )
}

export default SubmitBtn