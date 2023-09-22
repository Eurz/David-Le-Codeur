import { Blocks } from '@/components/blocks/Blocks'
import Layout from '@/components/ui/Layout'
import client from '@/tina/__generated__/client'
import { notFound } from 'next/navigation'

export const metadata = { title: 'salut' }

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
        // return []
    }
    // console.log(pagesResponse)
    return pagesResponse
}

export async function generateStaticParams() {
    const pagesResponse = await client.queries.pageConnection()
    const pages = pagesResponse.data.pageConnection.edges.map((page) => {
        return { url: page.node._sys.filename }
    })

    return pages
}
