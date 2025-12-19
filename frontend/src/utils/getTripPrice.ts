import { getEntry } from "astro:content"

export const getTripPrice = async (trip: string) => {
    const currentTrip = await getEntry('trips', trip)
    const price = currentTrip?.data.price

    return price
}
