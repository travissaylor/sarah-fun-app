import {
    Button,
    Container,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from "@chakra-ui/react"

export default function PageHeader({ title, description = "" }) {
    return (
        <Container maxW={"5xl"}>
            <Stack
                textAlign={"center"}
                align={"center"}
                spacing={{ base: 4, md: 5 }}
                py={{ base: 10, md: 14}}
            >
                <Heading
                    fontWeight={600}
                    fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
                    lineHeight={"110%"}
                    color={"purple.400"}
                >
                    {title}
                </Heading>
                <Text color={"gray.500"} maxW={"3xl"}>
                    {description}
                </Text>
            </Stack>
        </Container>
    )
}
