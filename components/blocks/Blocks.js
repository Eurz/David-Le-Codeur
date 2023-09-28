'use client'
import { useTina, tinaField } from 'tinacms/dist/react'
import HeroBanner from './HeroBanner'
import SimpleContent from './SimpleContent'
import PageTitle from '../ui/PageTitle'
import Gallery from './Gallery'
import TemplateTwoCols from './TemplateTwoCols'
import EventList from './EventList'
import SingleImage from './SingleImage'

/**
 *
 * @param {blocks} List of page's blocks
 * @returns
 */
export function Blocks({ blocks }) {
    // if (blocks === null) {
    //     return redirect('/accueil')
    // }

    const { data } = useTina({
        data: blocks.data,
        query: blocks.query,
        variables: blocks.variables,
    })

    const { displayTitle, subtitle, title, isPublished, seo, ...test } =
        data.page

    return (
        <>
            <PageTitle data={{ displayTitle, subtitle, title }} />

            {data.page.block
                ? data.page.block.map((block, i) => {
                      return (
                          <Block key={`${block.__typename}-${i}`} {...block} />
                      )
                  })
                : null}
        </>
    )
}

export const Block = (block) => {
    switch (block.__typename) {
        case 'PageBlockTemplate2ColsColumnOneHero':
        case 'PageBlockHero': {
            return <HeroBanner data={block} />
        }
        case 'PageBlockTemplate2ColsColumnOneSimpleContent':
        case 'PageBlockTemplate2ColsColumnTwoSimpleContent':
        case 'PageBlockSimpleContent': {
            return <SimpleContent data={block} />
        }
        case 'PageBlockTemplate2ColsColumnOneGalleryContent':
        case 'PageBlockGalleryContent': {
            return <Gallery data={block} />
        }
        case 'PageBlockTemplate2ColsColumnOneEvent':
        case 'PageBlockTemplate2ColsColumnTwoEvent':
        case 'PageBlockEvent': {
            return <EventList data={block} />
        }
        case 'PageBlockTemplate2Cols': {
            return <TemplateTwoCols data={block} />
        }
        case 'PageBlockSingleImage': {
            return <SingleImage data={block} />
        }
        default:
            return null
    }
}
