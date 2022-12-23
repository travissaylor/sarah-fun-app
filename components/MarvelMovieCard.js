import Image from "next/legacy/image";
import {
    Box,
    Center,
    Heading,
    Text,
    useColorModeValue,
    Flex,
} from "@chakra-ui/react"

export default function MarvelMovieCard({ movie }) {
    const releaseData = movie.release_date ? new Date(movie.release_date) : null
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
                    {movie.cover_url && (
                        <Image
                            src={movie.cover_url}
                            layout={"fill"}
                            objectFit="cover"
                        />
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
                        Phase {movie.phase || "TBA"}
                    </Text>
                    <Heading
                        color={useColorModeValue("gray.700", "white")}
                        fontSize={"2xl"}
                        fontFamily={"body"}
                    >
                        {movie.title}
                    </Heading>
                    <Text color={"gray.500"} minH="100px">
                        {movie.overview}
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
                        {movie.directed_by || "Director TBA"}
                    </Text>
                    <Text color={"gray.500"}>
                        {releaseData ? `${releaseData.getUTCMonth() + 1}/${releaseData.getUTCDate()}/${releaseData.getUTCFullYear()}` : "TBA"} ·{" "}
                        {movie.duration || "TBA"} mins
                    </Text>
                </Flex>
            </Flex>
        </Center>
    )
}
