import { tinaField } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

export default function SimpleContent({ data }) {
    const featured = data.featured ? 'skills' : ''
    return (
        <section
            className={`${featured} row`}
            data-tina-field={tinaField(data, 'title')}
        >
            {/* {data.title && <h2>{data.title}</h2>} */}
            <TinaMarkdown content={data.description} />
        </section>
    )
}
