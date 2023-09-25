'use client'

import { oswald } from '@/app/utils/fonts'
import { tinaField } from 'tinacms/dist/react'

export default function PageTitle({ data }) {
    return (
        <>
            {data.displayTitle && (
                <section className="row">
                    <h1
                        className={`${oswald.className} title-h2`}
                        data-tina-field={tinaField(data.page, 'title')}
                    >
                        `{data.subtitle ?? '...'}
                        <span>{data.title}`</span>
                    </h1>
                </section>
            )}
        </>
    )
}
