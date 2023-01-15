export interface CatBreeds {
    id: number
    name: string
}

export interface CatImage {
    id: string
    url: string
    width: number
    height: number
    mime_type: string
    breeds: CatBreeds[]
}