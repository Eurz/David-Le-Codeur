'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function DesktopNav({ data }) {
    const pathname = usePathname()
    const links = data.links?.map((link, i) => {
        const pageLink =
            link.href !== '' ? link.href : `/${link.page?._sys.filename}`
        const isActive = pathname === pageLink

        return (
            <Link
                key={i}
                href={pageLink}
                title={link.linkTitle}
                className={isActive ? 'active' : ''}
            >
                {link.label}
            </Link>
        )
    })
    return <nav className="nav-main">{links}</nav>
}
