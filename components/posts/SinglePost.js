'use client'
import { useTina, tinaField } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

import PageTitle from '@/components/ui/PageTitle'
import Image from 'next/image'
import TagsList from '../projects/TagsList'
import Link from 'next/link'

export default function SinglePost(props) {
    const { data } = useTina(props)
    const { post } = data

    return (
        <>
            <PageTitle
                data={{
                    title: post.title,
                    displayTitle: true,
                    subtitle: 'Post',
                }}
            />
            <section className="row">
                <div className="single-post">
                    <Link href={'/posts'}> &lt; Retour aux articles</Link>
                    <TagsList tags={post.tag} />
                    <div className="post-header">
                        <div
                            className="thumb"
                            data-tina-field={
                                post.banner && tinaField(post, 'banner')
                            }
                        >
                            <Image
                                src={post.banner || '/default-image.svg'}
                                width={400}
                                height={300}
                                alt={post.title}
                                className="img-full"
                            />
                        </div>
                        <div className="description">
                            <TinaMarkdown content={post.body} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
