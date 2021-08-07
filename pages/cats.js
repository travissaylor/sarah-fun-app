import {
    Button,
    Center,
    Container,
    Image,
    SimpleGrid,
    Spinner,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import PageHeader from "../components/PageHeader"
import MainLayout from "../layouts/MainLayout"

export default function Cats() {
    const [cats, setCats] = useState([])
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(true)

    const fetchCats = async (limit = 12, page = 0) => {
        const apiKey = process.env.NEXT_PUBLIC_CATS_API_KEY
        const url = new URL("https://api.thecatapi.com/v1/images/search")
        url.searchParams.set("limit", limit)
        url.searchParams.set("page", page)

        const headers = new Headers()
        headers.set("x-api-key", apiKey)

        const req = await fetch(url, { headers })
        const json = await req.json()

        return json
    }

    const LoadMoreCats = async () => {
        setLoading(true);
        const newCats = await fetchCats(6, page)
        setPage((prevPage) => prevPage + 1)
        setCats((prevCats) => [...prevCats, ...newCats])
        setLoading(false);
    }

    useEffect(async () => {
        const newCats = await fetchCats(12, page)
        setPage((prevPage) => prevPage + 1)
        setCats(newCats)
        setLoading(false)
    }, [])

    return (
        <MainLayout title="Cats">
            <PageHeader
                title="Cats"
                description="In ancient times cats were worshipped as gods; they have not forgotten this."
            />

            <Center>
                <SimpleGrid columns={[1, 2, 3]} spacing="20px">
                    {cats.map((cat, index) => (
                        <Image
                            key={index}
                            src={cat.url}
                            boxSize="250px"
                            objectFit="cover"
                        />
                    ))}
                </SimpleGrid>
            </Center>

            {loading ? (
                <Center m="8">
                    <Spinner />
                </Center>
            ) : (
                <Center m="8">
                    <Button onClick={LoadMoreCats}>Load More Cats</Button>
                </Center>
            )}
        </MainLayout>
    )
}
