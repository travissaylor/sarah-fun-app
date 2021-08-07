import { useRouter } from "next/router"
import ErrorPage from "next/error"
import { getPostBySlug, getAllPosts } from "../../lib/api"
import markdownToHtml from "../../lib/markdownToHtml"
import MainLayout from "../../layouts/MainLayout"
import Head from "next/head"
import PageHeader from "../../components/PageHeader"
import { Container } from "@chakra-ui/react"

export default function Note({ post, morePosts, preview }) {
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
                        <Container>
                            <div dangerouslySetInnerHTML={{__html: post.content}} />
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
