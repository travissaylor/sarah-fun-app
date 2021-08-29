import MainLayout from "../layouts/MainLayout"
import PageHeader from "../components/PageHeader"
import LokiInfo from "../components/LokiInfo"
import MarvelMovies from "../components/MarvelMovies"
import { Center, Divider, Link, Text } from "@chakra-ui/react"
import MarvelShows from "../components/MarvelShows"
import NextLink from "next/link"
import KorgRandomQuoteGenerator from "../components/KorgRandomQuoteGenerator"

export default function Marvel() {
    return (
        <MainLayout title="Marvel">
            <PageHeader
                title="Marvel"
                description="Get your Marvel fix here!"
            />

            <Center mb={8}>
                <NextLink href="#marvel_movies"><Link fontSize="3xl" mx={2}>Movies</Link></NextLink>
                <Text as="span" fontSize="3xl"> |{" "}</Text>
                <NextLink href="#marvel_shows"><Link fontSize="3xl"  mx={2}>Shows</Link></NextLink>
            </Center>

            <MarvelMovies />

            <Center height="50px">
                <Divider />
            </Center>

            <MarvelShows />

            <KorgRandomQuoteGenerator />
        </MainLayout>
    )
}
