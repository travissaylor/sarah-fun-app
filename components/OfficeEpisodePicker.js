import {
    Button,
    Center,
    Container,
    Heading,
    Spinner,
    Text,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"

export default function OfficeEpisodePicker() {
    const [episodeData, setEpisodeData] = useState()
    const [loading, setLoading] = useState(true)

    const fetchRandomEpisode = async () => {
        const url = new URL("https://www.officeapi.dev/api/episodes/random")

        const req = await fetch(url)
        return await req.json()
    }

    const fetchAndSetEpisodeData = async () => {
        setLoading(true)
        const newEpisode = await fetchRandomEpisode()
        console.log(newEpisode)
        setEpisodeData(newEpisode.data)
        setLoading(false)
    }

    useEffect(async () => {
        await fetchAndSetEpisodeData()
    }, [])

    return (
        <Container maxW="xl" centerContent textAlign="center">
            <Heading m="5">Episode Picker</Heading>
            {!episodeData || loading ? (
                <Center m="8">
                    <Spinner />
                </Center>
            ) : (
                <>
                    <Text fontSize="2xl">{episodeData.title}</Text>
                    <Text fontSize="xl">{episodeData.description}</Text>
                    <Button m="8" onClick={fetchAndSetEpisodeData}>
                        Load Another Episode
                    </Button>
                </>
            )}
        </Container>
    )
}
