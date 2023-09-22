import Link from 'next/link'

export default function ButtonAction({ actions }) {
    console.log(actions)

    return (
        <Link href={actions.link} className="btn">
            {actions.label}
        </Link>
    )
}
