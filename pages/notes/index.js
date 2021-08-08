import { SimpleGrid } from "@chakra-ui/react"
import Link from "next/link"
import NoteCard from "../../components/NoteCard"
import PageHeader from "../../components/PageHeader"
import MainLayout from "../../layouts/MainLayout"
import { getAllPosts } from "../../lib/api"

export default function Notes({ notes }) {
    return (
        <MainLayout title="Notes">
            <PageHeader
                title="Notes"
                description="Just a few notes for me to express to you"
            />
            <SimpleGrid columns={[1, null, 2, null, 3]} spacing="40px">
                {notes.map((note, index) => (
                    <NoteCard key={index} note={note} />
                ))}
            </SimpleGrid>
        </MainLayout>
    )
}

export async function getStaticProps() {
    const allPosts = getAllPosts([
        "title",
        "date",
        "slug",
        "author",
        "coverImage",
        "excerpt",
        "tag"
    ])

    return {
        props: { notes: allPosts },
    }
}
