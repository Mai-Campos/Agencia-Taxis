import { unknown } from 'astro:schema'

export const submitTrip = async (payload: Object) => {
  const res = await fetch(`http://localhost:3000/api/reservations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const data = await res.json()
  if (!res.ok) {
    const errorMsg = data?.message || 'Unknown server error'
    throw new Error(errorMsg)
  }

  return data
}
