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

export default function AvatarCharacterCard({ character, loadAnotherCharacter }) {
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
                    h={"400px"}
                    bg={"gray.100"}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={"relative"}
                >
                    {character?.photoUrl && (
                        <Image
                            src={character.photoUrl}
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
                        {character?.affiliation}
                    </Text>
                    <Heading
                        color={useColorModeValue("gray.700", "white")}
                        fontSize={"2xl"}
                        fontFamily={"body"}
                    >
                        {character?.name}
                    </Heading>
                    <SimpleGrid columns={2}>
                        {character?.gender && (
                            <Text my={2}>
                                Gender:{" "}
                                <Text color={"gray.500"}>
                                    {character.gender}
                                </Text>
                            </Text>
                        )}
                        {character?.love && (
                            <Text my={2}>
                                Love:{" "}
                                <Text color={"gray.500"}>{character.love}</Text>
                            </Text>
                        )}
                        {character?.weapon && (
                            <Text my={2}>
                                Weapon:{" "}
                                <Text color={"gray.500"}>
                                    {character.weapon}
                                </Text>
                            </Text>
                        )}
                        {character?.allies && character.allies.length > 0 && (
                            <Box>
                                <Text my={2}>Allies:</Text>
                                {character.allies.map((ally, index) => (
                                    <Text key={index} color={"gray.500"}>
                                        {ally}
                                        {index <= character.allies.length - 1
                                            ? ""
                                            : ", "}
                                    </Text>
                                ))}
                            </Box>
                        )}
                        {character?.enemies && character.enemies.length > 0 && (
                            <Box>
                                <Text my={2}>Enemies:</Text>
                                {character.enemies.map((enemy, index) => (
                                    <Text key={index} color={"gray.500"}>
                                        {enemy}
                                        {index <= character.enemies.length - 1
                                            ? ""
                                            : ", "}
                                    </Text>
                                ))}
                            </Box>
                        )}
                    </SimpleGrid>
                </Flex>
            </Flex>
        </Center>
    )
}
