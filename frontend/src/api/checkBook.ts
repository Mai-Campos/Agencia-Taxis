export const checkBook = async (bookNumber: Object) => {
  const res = await fetch(
    `https://enterprising-florida-chunkily.ngrok-free.dev/api/reservations/${bookNumber}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application-json' },
      body: JSON.stringify(bookNumber),
    }
  )

  const data = await res.json()
  if (!res.ok) {
    const errorMsg = data?.message || 'Unknown server error'
    throw new Error(errorMsg)
  }

  return data
}
