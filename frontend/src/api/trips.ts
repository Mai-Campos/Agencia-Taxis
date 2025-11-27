export const submitTrip = async (payload: Object) => {
  const res = await fetch('https://enterprising-florida-chunkily.ngrok-free.dev/api/reservations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!res.ok) throw new Error('Server error')

  return res.json()
}
