import { Blocks } from '@/components/blocks/Blocks'
import Layout from '@/components/ui/Layout'
import client from '@/tina/__generated__/client'
import { notFound } from 'next/navigation'

import { access, constants } from 'node:fs'
import { Suspense } from 'react'

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
    const filename = params.url
    const tinaProps = await getPages(filename)
    console.log(tinaProps.data.page)
    return (
        <>
            <Suspense fallback={<div>Loading dfd sf fez fe </div>}>
                <Blocks blocks={tinaProps} />
            </Suspense>
        </>
    )
}

export async function getPages(filename) {
    const pagesResponse = await client.queries.page({
        relativePath: `${filename}.md`,
    })

    // if (!pagesResponse) {
    //     notFound()
    // }
    return pagesResponse
}

// export async function generateStaticParams() {
//     const pagesResponse = await client.queries.pageConnection()
//     const pages = pagesResponse.data.pageConnection.edges.map((page) => {
//         return { url: page.node._sys.filename }
//     })

//     return pages
// }

function fileExist(path) {
    let response = true

    access(path, constants.F_OK, (err) => {
        if (err) {
            response = false
        }
    })

    return response
}
