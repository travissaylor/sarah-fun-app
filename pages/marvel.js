import MainLayout from "../layouts/MainLayout"
import PageHeader from "../components/PageHeader"
import LokiInfo from "../components/LokiInfo"
import MarvelMovies from "../components/MarvelMovies"
import { Center, Divider } from "@chakra-ui/react"

export default function Marvel() {
    return (
        <MainLayout title="Marvel">
            <PageHeader title="Marvel" description="Get your Marvel fix here!" />

            {/* <LokiInfo /> */}
            <MarvelMovies />

            <Center height="50px">
                <Divider />
            </Center>

        </MainLayout>
    )
}
