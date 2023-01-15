import { CatImage } from "./entity"

export const fetchCats = async (limit = 12, page = 0) => {
    const apiKey = process.env.NEXT_PUBLIC_CATS_API_KEY
    const url = new URL("https://api.thecatapi.com/v1/images/search")
    url.searchParams.set("limit", limit.toString())
    url.searchParams.set("page", page.toString())

    const headers = new Headers()
    headers.set("x-api-key", apiKey)

    const req = await fetch(url, { headers })
    const json = await req.json()

    return json as CatImage[]
}