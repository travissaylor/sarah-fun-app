import {
    Box,
    Center,
    Container,
    Heading,
    ListIcon,
    ListItem,
    Spinner,
    Text,
    UnorderedList,
    VStack,
} from "@chakra-ui/react"

import { ImBooks } from "react-icons/im"

import { useEffect, useState } from "react"
import Image from "next/image";

export default function LokiInfo() {
    const [lokiData, setLokiData] = useState()
    const [loading, setLoading] = useState(true)

    const fetchLokiData = async () => {
        const apiKey = process.env.NEXT_PUBLIC_MARVEL_API_KEY
        const url = new URL(
            "https://gateway.marvel.com:443/v1/public/characters"
        )

        url.searchParams.set("apikey", apiKey)
        url.searchParams.set("name", "Loki")

        const res = await fetch(url)
        return res.json()
    }

    useEffect(() => {
        const setInitialData = async () => {
            const newLokiData = await fetchLokiData()
            setLokiData(newLokiData.data.results[0])
            setTimeout(() => {
                setLoading(false)
            }, 300)
        }

        setInitialData()
    }, [])

    return (
        <Container centerContent textAlign="center">
            <Box mb="8">
                <Heading as="h2" m="2" color="green.400">
                    Loki
                </Heading>
                <Text fontSize="lg" color={"gray.500"}>
                    Your Favorite God of Mischief
                </Text>
            </Box>
            {loading || !lokiData ? (
                <Center>
                    <Spinner />
                </Center>
            ) : (
                <VStack>
                    <Image
                        src={`${lokiData.thumbnail.path}.${lokiData.thumbnail.extension}`}
                        width="300px"
                        height="300px"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            objectFit: "cover"
                        }} />
                    <Box textAlign="center" m="5">
                        <Heading as="h3" m="5" color="green.400">
                            Series Loki Appears In
                        </Heading>
                        <UnorderedList textAlign="left" listStyleType="none">
                            {lokiData.series.items.map((seriesItem, index) => (
                                <ListItem key={index} m="2">
                                    <ListIcon as={ImBooks} color="purple.500" />
                                    {seriesItem.name}
                                </ListItem>
                            ))}
                        </UnorderedList>
                    </Box>
                    <Box textAlign="center" m="5">
                        <Heading as="h3" m="5" color="green.400">
                            Comics Loki Appears In
                        </Heading>
                        <UnorderedList textAlign="left" listStyleType="none">
                            {lokiData.comics.items.map((comic, index) => (
                                <ListItem key={index} m="2">
                                    <ListIcon as={ImBooks} color="purple.500" />
                                    {comic.name}
                                </ListItem>
                            ))}
                        </UnorderedList>
                    </Box>
                </VStack>
            )}
        </Container>
    );
}
