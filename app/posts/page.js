import PageTitle from '@/components/ui/PageTitle'
import PostsList from '@/components/posts/PostsList'
import client from '@/tina/__generated__/client'

export default async function PostsPage() {
    const dataPageTitle = {
        title: 'Posts',
        subtitle: null,
        displayTitle: true,
    }

    const postsData = await getPosts()

    return (
        <>
            <PageTitle data={dataPageTitle}></PageTitle>
            <PostsList {...postsData} />
        </>
    )
}

async function getPosts() {
    const postsResponse = await client.queries.postConnection()
    // const posts = postsResponse.data.postConnection.edges.map((post) => {
    //     return { slug: post.node._sys.filename }
    // })
    return postsResponse
}
