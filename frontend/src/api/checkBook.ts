export const checkBook = async (bookNumber: string) => {
  const res = await fetch(
    `http://localhost:3000/api/reservations/${bookNumber}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
  )

  const data = await res.json()
  if (!res.ok) {
    const errorMsg = data?.message || 'Unknown server error'
    throw new Error(errorMsg)
  }

  return data
}
