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

export default function KorgRandomQuoteGenerator() {
    const [quoteData, setQuoteData] = useState()
    const [loading, setLoading] = useState(true)

    const fetchRandomQuote = async () => {
        const url = new URL(
            "https://korg-api.saylordevelopment.com/api/quotes/random"
        )
        
        const headers = new Headers()
        headers.append(
            "Authorization",
            `Bearer ${process.env.NEXT_PUBLIC_KORG_API_TOKEN}`
        )

        const requestOptions = {
            method: "GET",
            headers: headers,
            redirect: "follow",
        }

        const req = await fetch(url, requestOptions)
        return await req.json()
    }

    const fetchAndSetQuoteData = async () => {
        setLoading(true)
        const newQuote = await fetchRandomQuote()
        setQuoteData(newQuote)

        setTimeout(() => {
            setLoading(false)
        }, 300)
    }

    useEffect(() => {
        const setInitialData = async () => {
            await fetchAndSetQuoteData()
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
                <Heading m="5">Random Korg Quote Generator</Heading>
                {!quoteData || loading ? (
                    <Center m="8">
                        <Spinner />
                    </Center>
                ) : (
                    <VStack>
                        <Text fontSize="xl">{quoteData.content}</Text>
                        <Text fontSize="2xl">
                            - {quoteData.character.name}, {quoteData.movie.title}
                        </Text>
                    </VStack>
                )}
                <Container centerContent>
                    <Button
                        m="8"
                        disabled={loading}
                        onClick={fetchAndSetQuoteData}
                    >
                        Load Another Quote
                    </Button>
                </Container>
            </Flex>
        </Container>
    )
}
