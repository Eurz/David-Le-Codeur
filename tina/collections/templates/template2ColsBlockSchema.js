import { contentBlockSchema } from './contentBlockSchema'
import { eventBlockSchema } from './eventBlockSchema'
import { galleryBlockSchema } from './galleryBlockSchema'
// import { heroBlockSchema } from './heroBlockSchema'

const templates = [contentBlockSchema, galleryBlockSchema, eventBlockSchema]

export const template2ColsBlockSchema = {
    name: 'template2Cols',
    label: 'Template 2 cols',
    ui: {
        // previewSrc: '/blocks/hero.png',
        // defaultItem: {
        //     title: 'Template 2 cols',
        //     description:
        //         'Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.',
        // },
        itemProps: (item) => {
            return { label: item?.title }
        },
    },
    fields: [
        { name: 'title', label: "Template's title", type: 'string' },
        {
            name: 'columnOne',
            label: 'Col One',
            type: 'object',
            list: true,
            templates,
        },
        {
            name: 'columnTwo',
            label: 'Col Two',
            type: 'object',
            list: true,
            templates,
        },
    ],
}
