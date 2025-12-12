export const checkBook = async (bookNumber: string) => {
  const res = await fetch(
    `https://enterprising-florida-chunkily.ngrok-free.dev/api/reservations/${bookNumber}`
  )
  console.log(res)
  const data = await res.json()
  console.log(data, 'dsdsdsadass')
  if (!res.ok) {
    const errorMsg = data?.message || 'Unknown server error'
    throw new Error(errorMsg)
  }

  return data
}
