import MainLayout from "../layouts/MainLayout"
import PageHeader from "../components/PageHeader"
import AvatarRandomCharacter from "../components/AvatarRandomCharacter"
import { Center, Text } from "@chakra-ui/react"

export default function Avatar() {
    return (
        <MainLayout title="Avatar">
            <PageHeader
                title="Avatar"
                description="Get your Marvel fix here!"
            />

            <AvatarRandomCharacter />
        </MainLayout>
    )
}
