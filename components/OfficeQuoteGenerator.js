import {
    Button,
    Center,
    Container,
    Heading,
    Spinner,
    Text,
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
        setLoading(false)
    }

    useEffect(async () => {
        await fetchAndSetQuoteData()
    }, [])

    return (
        <Container maxW="xl" centerContent textAlign="center">
            <Heading m="5">Random Quote Generator</Heading>
            {!quoteData || loading ? (
                <Center m="8">
                    <Spinner />
                </Center>
            ) : (
                <>
                    <Text fontSize="xl">{quoteData.content}</Text>
                    <Text fontSize="2xl">
                        - {quoteData.character.firstname}{" "}
                        {quoteData.character.lastname}
                    </Text>
                    <Button m="8" onClick={fetchAndSetQuoteData}>
                        Load Another Quote
                    </Button>
                </>
            )}
        </Container>
    )
}
