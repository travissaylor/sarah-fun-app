import Image from "next/image";
import {
    Box,
    Center,
    Heading,
    Text,
    useColorModeValue,
    Flex,
} from "@chakra-ui/react"

export default function MarvelShowCard({ show }) {
    return (
        <Center py={6}>
            <Flex
                maxW={"445px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"md"}
                p={6}
                minH="100%"
                overflow={"hidden"}
                flexDir="column"
                justifyContent="space-between"
            >
                <Box
                    h={"210px"}
                    bg={"gray.100"}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={"relative"}
                >
                    {show.cover_url && (
                        <Image
                            src={show.cover_url}
                            fill
                            style={{
                                maxWidth: "100%",
                                objectFit: "cover"
                            }} />
                    )}
                </Box>
                <Flex flex={1} direction="column">
                    <Text
                        color={"purple.500"}
                        textTransform={"uppercase"}
                        fontWeight={800}
                        fontSize={"sm"}
                        letterSpacing={1.1}
                    >
                        Phase {show.phase || "TBA"}
                    </Text>
                    <Heading
                        color={useColorModeValue("gray.700", "white")}
                        fontSize={"2xl"}
                        fontFamily={"body"}
                    >
                        {show.title}
                    </Heading>
                    <Text color={"gray.500"} minH="100px">
                        {show.overview}
                    </Text>
                </Flex>
                <Flex
                    mt={6}
                    direction={"column"}
                    flex={1}
                    spacing={0}
                    fontSize={"sm"}
                    justifyContent="flex-end"
                >
                    <Text fontWeight={600}>
                        {show.directed_by || "Director TBA"}
                    </Text>
                    <Text color={"gray.500"}>
                        {show.number_seasons || "TBA"} Season{show.number_seasons && show.number_seasons > 1 && "s"} ·{" "}
                        {show.number_episodes || "TBA"} Episodes
                    </Text>
                </Flex>
            </Flex>
        </Center>
    );
}
