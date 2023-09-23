import Layout from '@/components/ui/Layout'
import PageTitle from '@/components/ui/PageTitle'

export default function page() {
    const data = {
        title: 'Page des posts',
        subtitle: 'Subtitle',
        displayTitle: true,
    }
    return (
        <Layout>
            <PageTitle data={data}>
                <h1></h1>
            </PageTitle>
        </Layout>
    )
}
