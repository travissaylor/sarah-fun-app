import Head from "next/head"
import Sidebar from "../components/Sidebar"

export default function MainLayout({ title = "Sarah's Safe Space", children }) {
    return (
        <div className="app-wrapper">
            <Head>
                <title>{title}</title>
                <meta name="description" content="Sarah's Safe Space" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar>{children}</Sidebar>
        </div>
    )
}
