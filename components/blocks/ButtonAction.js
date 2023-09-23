import Link from 'next/link'

export default function ButtonAction({ actions }) {

    return (
        <Link href={actions.link} className="btn">
            {actions.label}
        </Link>
    )
}
