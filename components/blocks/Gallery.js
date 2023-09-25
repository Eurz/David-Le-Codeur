'use client'
import { useRef } from 'react'
import GalleryItem from '../projects/GalleryItem'

export default function Gallery({ data }) {
    const galleryRef = useRef(null)
    if (data.gallery === null) {
        return <div>Pas de projets pour le moment</div>
    }
    const galleriesList = data.gallery.map((gallery, i) => {

        return <GalleryItem ref={galleryRef} key={i} gallery={gallery} />
    })
    
    return (
        <section className="projects row" id="projects">
            <div className="row-section">
                <h2>{data.title}</h2>
                <div className="projects-list">{galleriesList} </div>
            </div>
        </section>
    )
}
