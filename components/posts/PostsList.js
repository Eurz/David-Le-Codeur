'use client'
import { useTina, tinaField } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import Image from 'next/image'
import Link from 'next/link'
import { oswald } from '@/app/utils/fonts'
import TagsList from '@/components/posts/TagsList'

export default function PostsList(props) {
    const { data } = useTina(props)
    const posts = data.postConnection.edges

    if (posts.length === 0 || !posts) {
        return <div>Il n`y a pas d'articles pour le moment</div>
    }

    return (
        <section className="row">
            <div className="posts-list">
                {posts.map((edge, i) => {
                    const post = edge?.node
                    if (!post) {
                        return null
                    }
                    console.log(post)
                    return (
                        <>
                            <div
                                key={post._sys.breadcrumbs.join('/')}
                                className="post"
                            >
                                <Link href={`/posts/${post._sys.filename}`}>
                                    <h2
                                        className={`${oswald.className}`}
                                        data-tina-field={
                                            post.title &&
                                            tinaField(post, 'title')
                                        }
                                    >
                                        {post.title}
                                    </h2>
                                    <div
                                        className="thumb"
                                        data-tina-field={
                                            post.banner &&
                                            tinaField(post, 'banner')
                                        }
                                    >
                                        <Image
                                            src={
                                                post.banner ||
                                                '/default-image.svg'
                                            }
                                            width={400}
                                            height={300}
                                            alt={post.title}
                                            className="img-full"
                                        />
                                    </div>
                                    <div
                                        className="description"
                                        data-tina-field={tinaField(
                                            post,
                                            'body'
                                        )}
                                    >
                                        <TinaMarkdown content={post.body} />
                                    </div>
                                </Link>
                                {post.tag && <TagsList tags={post.tag} />}
                            </div>
                        </>
                    )
                })}
            </div>
        </section>
    )
}
