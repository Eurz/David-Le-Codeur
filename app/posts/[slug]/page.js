import client from '@/tina/__generated__/client'
import SinglePost from '@/components/posts/SinglePost'
import { notFound } from 'next/navigation'

export default async function PostDetails({ params }) {
    let postsResponse
    try {
        postsResponse = await client.queries.post({
            relativePath: `${params.slug}.md`,
        })
    } catch (error) {
        notFound()
    }

    return (
        <>
            <SinglePost {...postsResponse} />
        </>
    )
}

// async function getPosts() {
//     const postsResponse = await client.queries.postConnection()
//     console.log(postsResponse)
//     return (
//         <>

//         </>
//     )
// }
