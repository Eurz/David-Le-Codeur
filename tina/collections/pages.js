// import { contentBlockSchema } from './templates/contentBlockSchema'
// import { galleryBlockSchema } from './templates/galleryBlockSchema'
// import { heroBlockSchema } from './templates/heroBlockSchema'
// import { template2ColsBlockSchema } from './templates/template2ColsBlockSchema'
// import { eventBlockSchema } from './templates/eventBlockSchema'
import templates from './templates'

const pages = {
    name: 'page',
    label: 'Pages',
    path: 'content/pages',
    format: 'md',
    ui: {
        router: ({ document }) => {
            return `${document._sys.filename}`
        },
        defaultItem: () => {
            return {
                title: 'New page',
                isPublished: false,
                displayTitle: true,
            }
        },
        filename: {
            readonly: true,
            slugify: (values) => {
                return (
                    `${values?.title?.toLowerCase().replace(/ /g, '-')}` ||
                    'filename'
                )
            },
        },
        beforeSubmit: async ({ form, cms, values }) => {
            console.log({ form })
            return {
                ...values,
                lastUpdated: new Date().toISOString(),
            }
        },
    },
    fields: [
        {
            name: 'subtitle',
            label: 'Subtitle',
            type: 'string',
        },
        {
            type: 'string',
            label: 'Title',
            name: 'title',
            description:
                'The title of the page. This is used to display the title in the CMS',
            isTitle: true,
            required: true,
        },
        {
            name: 'seo',
            label: 'Seo',
            type: 'object',
            fields: [
                { name: 'title', label: 'Title', type: 'string' },
                {
                    name: 'description',
                    label: 'Description',
                    type: 'string',
                    ui: { component: 'textarea' },
                },
            ],
        },
        { type: 'boolean', label: 'Published', name: 'isPublished' },
        { type: 'boolean', label: 'Display title', name: 'displayTitle' },
        {
            name: 'block',
            label: 'Sections',
            type: 'object',
            list: true,
            ui: {
                visualSelector: true,
            },
            templates: templates,
        },
    ],
}

export default pages
