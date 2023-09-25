import Layout from '@/components/ui/Layout'
import client from '@/tina/__generated__/client'
import { notFound } from 'next/navigation'

export default async function Home() {
    const tinaProps = await getPages()
}

export async function getPages() {
    const pagesResponse = await client.queries.page({
        relativePath: 'accueil.md',
    })

    return pagesResponse
}
