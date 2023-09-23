import { oswald } from '@/app/utils/fonts'
import DesktopNav from './DesktopNav'
import SocialLinks from './SocialLinks'
import Link from 'next/link'

export default function Header({ settings }) {
    const navLinks = settings.navigation

    return (
        <header id="header" className="header">
            <Link
                href={'/'}
                className={`logo`}
                title={'Développeur Front End '}
            >
                <span className={`${oswald.className} name`}>
                    {settings.header.name}
                </span>
                <span className={`${oswald.className} pseudo`}>
                    {settings.header.tagline}
                </span>
            </Link>
            <a href="#" id="toggle-nav" className="toggle-nav">
                <i className="fa-solid fa-plus"></i>
            </a>
            <DesktopNav data={navLinks} />
            <SocialLinks />
        </header>
    )
}
