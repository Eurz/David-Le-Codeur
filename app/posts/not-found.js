import Link from 'next/link'
import PageTitle from '@/components/ui/PageTitle'

export default function NotFound() {
    const dataPageTitle = {
        title: 'Posts',
        subtitle: null,
        displayTitle: true,
    }
    return (
        <section className="row">
            <PageTitle data={dataPageTitle} />
            <p>Could not find requested resource</p>
            <Link href="/" className="btn">
                Retour à l'accueil
            </Link>
        </section>
    )
}
