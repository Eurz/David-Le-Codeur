import { oswald, robotoCondensed } from '@/app/utils/fonts'
import DesktopNav from './DesktopNav'
import SocialLinks from './SocialLinks'
import Link from 'next/link'

export default function Header() {
    const navLinks = [
        { label: 'Accueil', path: '/accueil', title: 'Page accueil' },
        { label: 'Parcours', path: '/parcours', title: 'Page parcours' },
        { label: 'Projets', path: '/projets', title: 'Page projets' },
        { label: 'Contact', path: '/contact', title: 'Page contact' },
    ]
    return (
        <header id="header" className="header">
            <Link
                href={'/'}
                className={`logo ${oswald.className}`}
                title={'Développeur Front End '}
            >
                <span className="name">David</span>
                <span className="pseudo">Le Codeur</span>
            </Link>
            <a href="#" id="toggle-nav" className="toggle-nav">
                <i className="fa-solid fa-plus"></i>
            </a>
            <DesktopNav data={navLinks} />
            <SocialLinks />
        </header>
    )
}
