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
            // if (document._sys.filename === 'accueil') {
            //     return `/accueil`
            // }
            // if (document._sys.filename === 'parcours') {
            //     return `/parcours`
            // }

            return `${document._sys.filename}` || null
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
        { type: 'boolean', label: 'Published', name: 'isPublished' },
        { type: 'boolean', label: 'Display title', name: 'displayTitle' },
        {
            name: 'post',
            label: 'Posts',
            type: 'reference',
            collections: ['post'],
        },
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
