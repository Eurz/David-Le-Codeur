'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function DesktopNav({ data }) {
    const pathname = usePathname()
    const navLinks = data.map((link, i) => {
        const isActive = pathname === link.path
        return (
            <Link
                key={i}
                href={link.path}
                title={link.title}
                className={isActive ? 'active' : ''}
            >
                {link.label}
            </Link>
        )
    })
    return <nav className="nav-main">{navLinks}</nav>
}
