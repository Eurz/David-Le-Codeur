import PageTitle from '@/components/ui/PageTitle'
import client from '@/tina/__generated__/client'
import React from 'react'

export default async function projectsDetailPage({ params }) {
    const data = await client.queries.project({
        relativePath: `${params.slug}.md`,
    })
    return (
        <PageTitle
            data={{
                displayTitle: true,
                subtitle: null,
                title: data.data.project.title,
            }}
        >
            projectsDetailPage
        </PageTitle>
    )
}
