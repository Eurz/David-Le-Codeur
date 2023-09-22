import Image from 'next/image'
import React from 'react'

export default function Gallery({ data }) {
    if (data.gallery === null) {
        return <div></div>
    }

    const galleriesList = data.gallery.map((item, i) => {
        return (
            <div key={i} className="project pop-link activated">
                <Image
                    src={item?.item?.thumb}
                    width={640}
                    height={427}
                    alt=""
                    className="thumb"
                />
                <div className="project-description">
                    <h3>{item?.item?.title}</h3>
                    <p>{item?.item?.subtitle}</p>
                </div>

                {/* <div>{isPublished}</div> */}
            </div>
        )
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
