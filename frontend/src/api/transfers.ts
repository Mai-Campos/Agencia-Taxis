export const submitTransfer = async (payload: Object) => {
  const res = await fetch('https://enterprising-florida-chunkily.ngrok-free.dev/api/reservations', {
    method: 'POST',
    headers: { 'Content-Type': 'application-json' },
    body: JSON.stringify(payload),
  })

  const data = await res.json()
  if (!res.ok) {
    const errorMsg = data?.message || 'Unknown server error'
    throw new Error(errorMsg)
  }

  return data
}
