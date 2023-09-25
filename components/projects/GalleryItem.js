'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function GalleryItem({ gallery }) {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked((v) => !v)
    }
    return (
        <>
            <div className="project pop-link activated">
                <Image
                    src={gallery?.item?.thumb || '/default-image.svg'}
                    width={600}
                    height={247}
                    alt={`${gallery?.item?.title}`}
                    // className="thumb"
                />
                <div className="project-description">
                    <h3>{gallery?.item?.title || 'title'}</h3>
                    <p>{gallery?.item?.subtitle || 'subtitle'}</p>
                </div>

                {/* <div>{isPublished}</div> */}
            </div>

            {clicked && <div>djshdkshkds</div>}
        </>
    )
}
