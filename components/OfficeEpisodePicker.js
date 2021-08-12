import {
    Button,
    Center,
    Container,
    Flex,
    Heading,
    Spinner,
    Text,
    VStack,
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
        setEpisodeData(newEpisode.data)
        setTimeout(() => {
            setLoading(false)
        }, 300)
    }

    useEffect(() => {
        const setInitialData = async () => {
            await fetchAndSetEpisodeData()
        }

        setInitialData()
    }, [])

    return (
        <Container
            maxW="xl"
            minH="lg"
            centerContent
            textAlign="center"
            pos="relative"
        >
            <Flex flex="1" direction="column" justifyContent="space-between">
                <Heading m="5">Episode Picker</Heading>
                {!episodeData || loading ? (
                    <Center m="8">
                        <Spinner />
                    </Center>
                ) : (
                    <VStack>
                        <Text fontSize="3xl">{episodeData.title}</Text>
                        <Text fontSize="xl">{episodeData.description}</Text>
                    </VStack>
                )}
                <Container centerContent>
                    <Button
                        m="8"
                        disabled={loading}
                        onClick={fetchAndSetEpisodeData}
                    >
                        Load Another Episode
                    </Button>
                </Container>
            </Flex>
        </Container>
    )
}
