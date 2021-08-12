import { Flex, Text } from "@chakra-ui/react"

export default function AvatarAttribute({ name, value }) {
    return (
        <Flex direction="column" my={2}>
            <Text>{name}:</Text>
            <Text color={"gray.500"}>{value}</Text>
        </Flex>
    )
}
