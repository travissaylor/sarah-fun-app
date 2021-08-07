import MainLayout from "../layouts/MainLayout"
import PageHeader from "../components/PageHeader"
import LokiInfo from "../components/LokiInfo"
export default function Marvel() {
    return (
        <MainLayout title="Marvel">
            <PageHeader title="Marvel" description="Get your Marvel fix here!" />

            <LokiInfo />
        </MainLayout>
    )
}
