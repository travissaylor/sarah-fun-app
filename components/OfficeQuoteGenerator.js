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

export default function OfficeQuoteGenerator() {
    const [quoteData, setQuoteData] = useState()
    const [loading, setLoading] = useState(true)

    const fetchRandomQuote = async () => {
        const url = new URL("https://www.officeapi.dev/api/quotes/random")

        const req = await fetch(url)
        return await req.json()
    }

    const fetchAndSetQuoteData = async () => {
        setLoading(true)
        const newQuote = await fetchRandomQuote()
        setQuoteData(newQuote.data)

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
                <Heading m="5">Random Quote Generator</Heading>
                {!quoteData || loading ? (
                    <Center m="8">
                        <Spinner />
                    </Center>
                ) : (
                    <VStack>
                        <Text fontSize="xl">{quoteData.content}</Text>
                        <Text fontSize="2xl">
                            - {quoteData.character.firstname}{" "}
                            {quoteData.character.lastname}
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
