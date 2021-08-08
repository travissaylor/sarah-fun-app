import {
    Button,
    Container,
    Heading,
    SimpleGrid,
    Spinner,
    Text,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import MarvelShowCard from "./MarvelShowCard"

export default function MarvelShows() {
    const [shows, setShows] = useState()
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

    const fetchShows = async (
        limit = 10,
        page = 0,
        order = "release_date,DESC",
        filter = null
    ) => {
        const url = new URL("https://mcuapi.herokuapp.com/api/v1/tvshows")

        url.searchParams.set("limit", limit)
        url.searchParams.set("page", page)
        url.searchParams.set("order", order)

        if (filter) {
            url.searchParams.set("filter", filter)
        }

        const res = await fetch(url)

        return await res.json()
    }

    const LoadMoreShows = async () => {
        setLoading(true)
        const newShows = await fetchShows(10, page)
        setShows((prevShows) => [...prevShows, ...newShows.data])
        setPage((prevPage) => prevPage + 1)

        setTimeout(() => {
            setLoading(false)
        }, 300)
    }

    useEffect(async () => {
        const newShows = await fetchShows(10, page)
        setShows(newShows.data)
        setPage((prevPage) => prevPage + 1)
        setTimeout(() => {
            setLoading(false)
        }, 300)
        console.log(newShows)
    }, [])

    return (
        <Container
            id="marvel_shows"
            maxW="container.xl"
            mb="50px"
            centerContent
        >
            <Container textAlign="center" m={5} centerContent>
                <Heading m={2}>Marvel Shows</Heading>
                <Text fontSize="lg" color={"gray.500"}>
                    The Marvel Cinimatic Universe can be tough to keep up with.
                    Here is a list of all the shows that we know about to this
                    point
                </Text>
            </Container>

            <SimpleGrid columns={[1, null, null, 2]} columnGap={10}>
                {shows &&
                    shows.map((show, index) => (
                        <MarvelShowCard key={index} show={show} />
                    ))}
            </SimpleGrid>

            <Container mt={8} centerContent>
                <Button onClick={LoadMoreShows}>
                    {loading ? <Spinner /> : "Load More Shows"}
                </Button>
            </Container>
        </Container>
    )
}
