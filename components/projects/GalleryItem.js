'use client'
import Image from 'next/image'

export default function GalleryItem({ gallery, handleClick }) {
    const { id, thumb, title, subtitle, ...details } = gallery.item
    return (
        <>
            <div
                className="project pop-link activated"
                onClick={() => handleClick({ ...details, title })}
            >
                <Image
                    src={thumb || '/default-image.svg'}
                    width={600}
                    height={247}
                    alt={`${title}`}
                    // className="thumb"
                />
                <div className="project-description">
                    <h3>{title ?? ''}</h3>
                    <p>{subtitle ?? ''}</p>
                </div>
            </div>
        </>
    )
}
