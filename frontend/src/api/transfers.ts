export const submitTransfer = async (payload: Object) => {
  const res = await fetch('https://api.com/endpoint', {
    method: 'POST',
    headers: { 'Content-Type': 'application-json' },
    body: JSON.stringify(payload),
  })

  if (!res.ok) throw new Error('Server Error')

  return res.json()
}
