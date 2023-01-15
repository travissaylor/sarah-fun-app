import {
    Box,
    Button,
    Center,
    Container,
    Flex,
    Heading,
    SimpleGrid,
    Spinner,
    Text,
    useColorModeValue,
} from "@chakra-ui/react"
import Image from "next/image"
import { useEffect, useState } from "react"
import AvatarCharacterCard from "./AvatarCharacterCard"

export default function AvatarRandomCharacter() {
    const [character, setCharacter] = useState()
    const [loading, setLoading] = useState(true)

    const fetchCharacter = async (count = 1) => {
        const baseUrl = "https://avatar-universe-api.saylordevelopment.com";
        const url = new URL(`${baseUrl}/v1/characters/random`)
        url.searchParams.append("count", count)

        console.log("url", url.toString())

        const res = await fetch(url.toString())

        return await res.json()
    }

    const loadAnotherCharacter = async () => {
        setLoading(true)
        const newCharacter = await fetchCharacter()
        setCharacter(newCharacter[0])
        setTimeout(() => {
            setLoading(false)
        }, 300)
    }

    useEffect(() => {
        const setInitialCharacter = async () => {
            const newCharacter = await fetchCharacter()
            setCharacter(newCharacter[0])
            setTimeout(() => {
                setLoading(false)
            }, 300)
        }

        setInitialCharacter()
    }, [])

    return (
        <Box>
            <Container textAlign="center" my={5} centerContent>
                <Heading m={2}>Random Character Generator</Heading>
                <Text fontSize="lg" color={"gray.500"}>
                    Keep clickin that button and they keep comin
                </Text>
            </Container>
            <AvatarCharacterCard
                character={character}
                loadAnotherCharacte
                r={loadAnotherCharacter}
            />
            <Container mt={8} centerContent>
                <Button onClick={loadAnotherCharacter}>
                    {loading ? <Spinner /> : "Load Another Character"}
                </Button>
            </Container>
        </Box>
    )
}
