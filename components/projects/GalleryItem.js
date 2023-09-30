'use client'
import { oswald } from '@/app/utils/fonts'
import Image from 'next/image'
import { tinaField } from 'tinacms/dist/react'

export default function GalleryItem({ gallery, handleClick }) {
    const { id, thumb, title, subtitle, ...details } = gallery.item
    return (
        <>
            <div
                className="project pop-link activated"
                onClick={() => handleClick({ ...details, title })}
                data-tina-field={tinaField(gallery.item, 'title')}
            >
                <Image
                    src={thumb || '/default-image.svg'}
                    width={600}
                    height={247}
                    alt={`${title}`}
                    // className="thumb"
                />
                <div className="project-description">
                    <h3 className={`${oswald.className}`}>{title ?? ''}</h3>
                    <p>{subtitle ?? ''}</p>
                </div>
            </div>
        </>
    )
}
