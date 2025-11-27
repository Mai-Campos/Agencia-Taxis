export const submitTrip = async (payload: Object) => {
  const res = await fetch('https://api.com/postRoute', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!res.ok) throw new Error('Server error')

  return res.json()
}
