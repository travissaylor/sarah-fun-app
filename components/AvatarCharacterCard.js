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
import AvatarAttribute from "./AvatarAttribute"

export default function AvatarCharacterCard({
    character,
    loadAnotherCharacter,
}) {
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
                    {character?.position && (
                        <Text my={2} fontSize="xl">
                            {character.position}
                        </Text>
                    )}
                    <SimpleGrid columns={2}>
                        {character?.gender && (
                            <AvatarAttribute
                                name="Gender"
                                value={character.gender}
                            />
                        )}
                        {character?.love && (
                            <AvatarAttribute
                                name="Love"
                                value={character.love}
                            />
                        )}
                        {character?.weapon && (
                            <AvatarAttribute
                                name="Weapon"
                                value={character.weapon}
                            />
                        )}
                        {character?.hair && (
                            <AvatarAttribute
                                name="Hair"
                                value={character.hair}
                            />
                        )}
                        {character?.allies && character.allies.length > 0 && (
                            <Box my={2}>
                                <Text>Allies:</Text>
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
                            <Box my={2}>
                                <Text>Enemies:</Text>
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
