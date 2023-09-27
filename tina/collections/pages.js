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
            type: 'string',
            label: 'Title',
            name: 'title',
            description:
                'The title of the page. This is used to display the title in the CMS',
            placeholder: 'Page title',
            isTitle: true,
            required: true,
        },
        {
            name: 'subtitle',
            label: 'On title',
            type: 'string',
        },

        {
            name: 'isPublished',
            label: 'Published',
            type: 'boolean',
            ui: { component: 'toggle' },
            toggleLabels: {
                true: 'On',
                false: 'Off',
            },
        },
        {
            name: 'displayTitle',
            label: 'Display title',
            type: 'boolean',
            ui: { component: 'toggle' },
            toggleLabels: {
                true: 'On',
                false: 'Off',
            },
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
    ],
}

export default pages
