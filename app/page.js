import Layout from '@/components/ui/Layout'
import client from '@/tina/__generated__/client'

export default async function Home() {
    const tinaProps = await getPages()
    return <Layout></Layout>
}

export async function getPages() {
    const pagesResponse = await client.queries.page({
        relativePath: 'accueil.md',
    })
    // console.log(pagesResponse)
    return pagesResponse
}
