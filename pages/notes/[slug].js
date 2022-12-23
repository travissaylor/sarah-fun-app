import { useRouter } from "next/router"
import ErrorPage from "next/error"
import { getPostBySlug, getAllPosts } from "../../lib/api"
import markdownToHtml from "../../lib/markdownToHtml"
import MainLayout from "../../layouts/MainLayout"
import Head from "next/head"
import PageHeader from "../../components/PageHeader"
import {
    Avatar,
    Box,
    Center,
    Container,
    Flex,
    Heading,
    Text,
} from "@chakra-ui/react"
import Image from "next/legacy/image";

export default function Note({ post, morePosts, preview }) {
    const noteDate = new Date(post.date)

    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <MainLayout title={post.title}>
            {router.isFallback ? (
                <p>Loading…</p>
            ) : (
                <>
                    <article className="mb-32">
                        <Head>
                            <title>
                                {post.title} | Next.js Blog Example with{" "}
                            </title>
                            <meta
                                property="og:image"
                                content={post.ogImage.url}
                            />
                        </Head>
                        <PageHeader title={post.title} />
                        <Container maxW="container.lg">
                            <Box
                                h={"400px"}
                                bg={"gray.100"}
                                mb={6}
                                pos={"relative"}
                            >
                                {post.coverImage && (
                                    <Image
                                        src={post.coverImage}
                                        layout={"fill"}
                                        objectFit="cover"
                                    />
                                )}
                            </Box>
                        </Container>
                        <Container centerContent>
                            <Flex
                                flex={1}
                                my={6}
                                direction={"row"}
                                spacing={4}
                                align={"center"}
                                justifyContent={"center"}
                            >
                                <Avatar
                                    src={post.author.picture}
                                    alt={"Author"}
                                />
                                <Flex
                                    flex={1}
                                    direction={"column"}
                                    spacing={0}
                                    ml={2}
                                    fontSize={"sm"}
                                >
                                    <Text fontWeight={600}>
                                        {post.author.name}
                                    </Text>
                                    <Text color={"gray.500"}>
                                        {noteDate.getUTCMonth() + 1}/
                                        {noteDate.getUTCDate()}/
                                        {noteDate.getUTCFullYear()}
                                    </Text>
                                </Flex>
                            </Flex>
                            <Box
                                className="content-wrapper"
                                dangerouslySetInnerHTML={{
                                    __html: post.content,
                                }}
                            />
                            <style jsx global>{`
                                .content-wrapper p {
                                    margin: 15px 0;
                                    font-size: var(--chakra-fontSizes-lg);
                                }
                            `}</style>
                        </Container>
                    </article>
                </>
            )}
        </MainLayout>
    )
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
        "title",
        "date",
        "slug",
        "author",
        "content",
        "ogImage",
        "coverImage",
    ])
    const content = await markdownToHtml(post.content || "")

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(["slug"])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}
