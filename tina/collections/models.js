import { contentBlockSchema } from './templates/contentBlockSchema'
import { heroBlockSchema } from './templates/heroBlockSchema'

const models = {
    name: 'model',
    label: 'Modèles de contenus',
    path: 'content/models',
    format: 'mdx',
    ui: {
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
    templates: [
        {
            name: 'content',
            label: 'Content Page',
            fields: [
                {
                    name: 'title',
                    label: 'title',
                    type: 'string',
                },
            ],
        },

        {
            name: 'member',
            label: 'Member Page',
            fields: [
                {
                    name: 'list',
                    label: 'members List',
                    type: 'reference',
                    collections: ['page'],
                },
            ],
        },
    ],
}

export default models
