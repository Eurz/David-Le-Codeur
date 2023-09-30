'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function NavBar({ navLinks }) {
    const pathname = usePathname()
    const breakPoint = 992
    const [isMobile, setIsMobile] = useState(null)
    const [isNavOpen, setIsNavOpen] = useState(false)

    const links = navLinks?.map((link, i) => {
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

    function onToggleNav(e) {
        setIsNavOpen((v) => !v)
    }
    useEffect(() => {
        if (window.innerWidth > breakPoint) {
            setIsMobile(false)
        } else {
            setIsMobile(true)
        }
    }, [])

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > breakPoint) {
                setIsMobile(false)
                setIsNavOpen(false)
                return
            }

            setIsMobile(true)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return (
        <>
            {isMobile !== null &&
                (isMobile ? (
                    <>
                        <a className="toggle-nav" onClick={onToggleNav}>
                            <span className="material-icons md-36">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="48"
                                    viewBox="0 -960 960 960"
                                    width="48"
                                >
                                    <path
                                        d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
                                        style={{
                                            fill: '#FFFFFF',
                                        }}
                                    />
                                </svg>
                            </span>
                        </a>
                        {isNavOpen && (
                            <nav
                                className="nav-main mobile-nav full-nav"
                                onClick={onToggleNav}
                            >
                                {links}
                            </nav>
                        )}
                    </>
                ) : (
                    <nav className="nav-main mobile-nav full-nav">{links}</nav>
                ))}
        </>
    )
}
