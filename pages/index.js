import { Button } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import IllustratedHero, { Illustration } from "../components/IllustratedHero"
import MainLayout from "../layouts/MainLayout"
import { LinkItems } from "../nav"

export default function Home() {
    const router = useRouter()

    const randomPageNavigator = () => {
        let linkIsValidated = false
        while (!linkIsValidated) {
            const link = LinkItems[Math.floor(Math.random() * LinkItems.length)]
            if (link.name !== "Home") {
                linkIsValidated = true
                router.push(link.route)
            }
        }
    }

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
                    <Link href="/notes">
                        <Button
                            rounded={"full"}
                            px={6}
                            colorScheme={"purple"}
                            bg={"purple.400"}
                            _hover={{ bg: "purple.500" }}
                        >
                            Read Notes
                        </Button>
                    </Link>
                }
                otherButton={
                    <Button
                        onClick={randomPageNavigator}
                        rounded={"full"}
                        px={6}
                    >
                        I'm feeling Lucky
                    </Button>
                }
            />
        </MainLayout>
    )
}
