import { Button } from "@chakra-ui/react"
import IllustratedHero, { Illustration } from "../components/IllustratedHero"
import MainLayout from "../layouts/MainLayout"

export default function Home() {
    return (
        <MainLayout title="Home">
            <IllustratedHero
                titleMain="Sarah's"
                titleHighlight="Happy Place"
                description="This is a safe space where you can relax and enjoy yourself. You deserve it!"
                fullIllustration={
                    <Illustration
                        height={{ sm: "24rem", lg: "28rem", xl: "40rem" }}
                        mt={{ base: 12, sm: 16 }}
                    />
                }
                highlightedButton={
                    <Button
                        rounded={"full"}
                        px={6}
                        colorScheme={"purple"}
                        bg={"purple.400"}
                        _hover={{ bg: "purple.500" }}
                    >
                        Get started
                    </Button>
                }
                otherButton={
                    <Button rounded={"full"} px={6}>
                        Learn more
                    </Button>
                }
            />
        </MainLayout>
    )
}
