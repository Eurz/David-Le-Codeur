import { oswald } from '@/app/utils/fonts'
import SocialLinks from './SocialLinks'
import Link from 'next/link'
import NavBar from './NavBar'

export default function Header({ settings }) {
    const { navLinks } = getNav()

    return (
        <header id="header" className="header">
            <Link
                href={'/'}
                className={`${oswald.className} logo`}
                title={'Développeur Front End '}
            >
                <span className={`name`}>{settings.header.name}</span>
                <span className={`pseudo`}>{settings.header.tagline}</span>
            </Link>
            {/* <DesktopNav data={navLinks} /> */}
            <NavBar navLinks={navLinks} />
            <SocialLinks data={settings.social} />
        </header>
    )
}

function getNav() {
    const navLinks = [
        {
            href: '/',
            label: 'Accueil',
            linkTitle: '',
        },
        {
            href: '/parcours',
            label: 'Parcours',
            linkTitle: null,
        },
        {
            href: '/projets',
            label: 'Projets',
            linkTitle: 'Application javascript & php',
        },
        {
            href: '/posts',
            label: 'Blog',
            linkTitle: 'Blog de David le codeur',
        },
        {
            href: '/contact',
            label: 'Contact',
            linkTitle: 'Me contacter',
        },
    ]

    return { navLinks }
}
