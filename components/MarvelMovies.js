import {
    Button,
    Container,
    Heading,
    SimpleGrid,
    Spinner,
    Text,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import MarvelMovieCard from "./MarvelMovieCard"

export default function MarvelMovies() {
    const [movies, setMovies] = useState()
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

    const fetchMovies = async (
        limit = 10,
        page = 0,
        order = "release_date,DESC",
        filter = null
    ) => {
        const url = new URL("https://mcuapi.herokuapp.com/api/v1/movies")

        url.searchParams.set("limit", limit)
        url.searchParams.set("page", page)
        url.searchParams.set("order", order)

        if (filter) {
            url.searchParams.set("filter", filter)
        }

        const res = await fetch(url)

        return await res.json()
    }

    const LoadMoreMovies = async () => {
        setLoading(true)
        const newMovies = await fetchMovies(10, page)
        setMovies((prevMovies) => [...prevMovies, ...newMovies.data])
        setPage((prevPage) => prevPage + 1)

        setTimeout(() => {
            setLoading(false)
        }, 300)
    }

    useEffect(() => {
        const setInitialMovies = async () => {
            const newMovies = await fetchMovies(10, page)
            setMovies(newMovies.data)
            setPage((prevPage) => prevPage + 1)
            setTimeout(() => {
                setLoading(false)
            }, 300)
        }

        setInitialMovies()
    }, [])

    return (
        <Container
            id="marvel_movies"
            maxW="container.xl"
            mb="50px"
            centerContent
        >
            <Container textAlign="center" m={5} centerContent>
                <Heading m={2}>Marvel Movies</Heading>
                <Text fontSize="lg" color={"gray.500"}>
                    The Marvel Cinimatic Universe can be tough to keep up with.
                    Here is a list of all the movies that we know about to this
                    point
                </Text>
            </Container>

            <SimpleGrid columns={[1, null, null, 2]} columnGap={10}>
                {movies &&
                    movies.map((movie, index) => (
                        <MarvelMovieCard key={index} movie={movie} />
                    ))}
            </SimpleGrid>

            <Container mt={8} centerContent>
                <Button onClick={LoadMoreMovies}>
                    {loading ? <Spinner /> : "Load More Movies"}
                </Button>
            </Container>
        </Container>
    )
}
