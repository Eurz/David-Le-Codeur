'use client'
import { useState } from 'react'
// import Image from 'next/image'
// import { forwardRef, useRef } from 'react'
import GalleryItem from '../projects/GalleryItem'
import TagsList from '../projects/TagsList'
import Modal from '@/components/modals/Modal'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import Link from 'next/link'

export default function Gallery({ data }) {
    if (data.gallery === null) {
        return <div>Pas de projets pour le moment</div>
    }
    const [clicked, setClicked] = useState(false)
    const [details, setDetails] = useState({})

    const handleClick = function (e) {
        setDetails(e)
        setClicked((v) => !v)
    }

    const handleClose = () => {
        setClicked(false)
    }

    const galleriesList = data.gallery.map((gallery, i) => {
        return (
            <GalleryItem key={i} gallery={gallery} handleClick={handleClick} />
        )
    })

    return (
        <>
            <section className="projects row" id="projects">
                <div className="row-section">
                    <h2>{data.title}</h2>
                    <div className="projects-list">{galleriesList}</div>
                </div>
            </section>
            {clicked && (
                <Modal title={details.title} onClose={handleClose}>
                    <TinaMarkdown content={details.body} />
                    {details.link && (
                        <div className="btn-groups">
                            <Link
                                href={`${details.link}`}
                                target="_blank"
                                className="btn btn-small"
                            >
                                <i className="fa-solid fa-right-to-bracket">
                                    {'>'}
                                </i>
                                Voir l'application
                            </Link>
                        </div>
                    )}
                    <TagsList tags={details.stack} />
                </Modal>
            )}
        </>
    )
}
