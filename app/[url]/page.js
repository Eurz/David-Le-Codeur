import { Blocks } from '@/components/blocks/Blocks'
import Layout from '@/components/ui/Layout'
import client from '@/tina/__generated__/client'

export async function generateMetadata({ params }) {
    const seoData = await client.queries.seoPage({
        relativePath: `${params.url}.md`,
    })

    const { seo } = seoData.data.page
    return {
        title: seo?.title || params.url,
        description: seo?.description || params.url,
    }
}

export default async function Page({ params }) {
    const url = params.url
    const isValidUrl = url !== 'mockServiceWorker.js'
    const tinaProps = isValidUrl ? await getPages(url) : null

    return (
        <>
            <Layout>
                <Blocks blocks={tinaProps} />
            </Layout>
        </>
    )
}

export async function getPages(filename) {
    const pagesResponse = await client.queries.page({
        relativePath: `${filename}.md`,
    })
    if (!pagesResponse) {
        notFound()
    }
    return pagesResponse
}

export async function generateStaticParams() {
    const pagesResponse = await client.queries.pageConnection()
    const pages = pagesResponse.data.pageConnection.edges.map((page) => {
        return { url: page.node._sys.filename }
    })

    return pages
}
