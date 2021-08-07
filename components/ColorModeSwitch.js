import { Switch, useColorMode } from "@chakra-ui/react"

export default function ColorModeSwitch() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Switch colorScheme="purple" size="lg" onChange={toggleColorMode} isChecked={colorMode === "dark" ? true : false} />
    )
}