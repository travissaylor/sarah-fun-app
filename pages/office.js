import { Center, Divider } from "@chakra-ui/react"
import OfficeEpisodePicker from "../components/OfficeEpisodePicker"
import OfficeQuoteGenerator from "../components/OfficeQuoteGenerator"
import PageHeader from "../components/PageHeader"
import MainLayout from "../layouts/MainLayout"

export default function Office() {
    return (
        <MainLayout title="The Office Funpage">
            <PageHeader
                title="The Office Funpage"
                description="Random stuff from the office"
            />

            <OfficeQuoteGenerator />
            <Center height="100px">
                <Divider />
            </Center>
            <OfficeEpisodePicker />
        </MainLayout>
    )
}
