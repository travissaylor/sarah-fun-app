import Image from "next/image"
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Flex,
} from "@chakra-ui/react"
import Link from "next/link"

export default function NoteCard({ note }) {
    const noteDate = new Date(note.date)
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
                <Link href={`/notes/${note.slug}`}>
                    <Box
                        h={"210px"}
                        bg={"gray.100"}
                        mt={-6}
                        mx={-6}
                        mb={6}
                        pos={"relative"}
                        cursor="pointer"
                    >
                        <Image
                            src={note.coverImage}
                            layout={"fill"}
                            objectFit="cover"
                        />
                    </Box>
                </Link>
                <Flex flex={1} direction="column">
                    <Text
                        color={"purple.500"}
                        textTransform={"uppercase"}
                        fontWeight={800}
                        fontSize={"sm"}
                        letterSpacing={1.1}
                    >
                        {note.tag}
                    </Text>
                    <Link href={`/notes/${note.slug}`}>
                        <Heading
                            color={useColorModeValue("gray.700", "white")}
                            fontSize={"2xl"}
                            fontFamily={"body"}
                            cursor="pointer"
                        >
                            {note.title}
                        </Heading>
                    </Link>
                    <Text color={"gray.500"}>{note.excerpt}</Text>
                </Flex>
                <Flex
                    flex={1}
                    mt={6}
                    direction={"row"}
                    spacing={4}
                    align={"center"}
                    alignItems={"flex-end"}
                >
                    <Avatar src={note.author.picture} alt={"Author"} />
                    <Flex
                        flex={1}
                        direction={"column"}
                        spacing={0}
                        ml={2}
                        fontSize={"sm"}
                    >
                        <Text fontWeight={600}>{note.author.name}</Text>
                        <Text color={"gray.500"}>
                            {noteDate.getUTCMonth() + 1}/{noteDate.getUTCDate()}
                            /{noteDate.getUTCFullYear()}
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Center>
    )
}
