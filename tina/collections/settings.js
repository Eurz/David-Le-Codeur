const settings = {
    name: 'setting',
    label: 'Settings',
    path: 'content/settings',
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
        },
        {
            name: 'header',
            label: 'Site identity',
            type: 'object',
            fields: [
                { name: 'name', label: 'Nom du site', type: 'string' },
                { name: 'tagline', label: 'Slogan', type: 'string' },
                { name: 'logo', label: 'Logo', type: 'image' },
                { name: 'favicon', label: 'Favicon', type: 'image' },
            ],
        },
        {
            name: 'navigation',
            label: 'Menus',
            type: 'object',
            fields: [
                {
                    name: 'links',
                    label: 'Nav Links',
                    type: 'object',
                    list: true,
                    ui: {
                        itemProps: (item) => {
                            return { label: item?.label }
                        },
                        defaultItem: {
                            href: '/',
                            label: 'New link',
                            page: '',
                        },
                    },
                    fields: [
                        {
                            name: 'href',
                            label: 'Link',
                            type: 'string',
                            // required: true,
                        },
                        {
                            name: 'label',
                            label: 'Label',
                            type: 'string',
                            required: true,
                        },
                        {
                            name: 'linkTitle',
                            label: 'Link title',
                            type: 'string',
                        },
                        {
                            name: 'page',
                            label: 'Linked page',
                            type: 'reference',
                            collections: ['page'],
                        },
                    ],
                },
            ],
        },
        {
            type: 'object',
            label: 'Social Links',
            name: 'social',
            fields: [
                {
                    name: 'facebook',
                    label: 'Facebook',
                    type: 'string',
                },
                {
                    name: 'twitter',
                    label: 'Twitter',
                    type: 'string',
                },
                {
                    name: 'instagram',
                    label: 'Instagram',
                    type: 'string',
                },
                {
                    name: 'github',
                    label: 'Github',
                    type: 'string',
                },
            ],
        },

        {
            name: 'footer',
            label: 'Footer',
            type: 'object',
            fields: [{ name: 'copyright', label: 'Copyright', type: 'string' }],
        },
        {
            name: 'posts',
            label: 'Post',
            type: 'object',
            fields: [
                {
                    type: 'string',
                    name: 'tags',
                    label: 'Tags',
                    description: 'Tags for this post',
                    list: true,
                    ui: {
                        component: 'tags',
                    },
                },
            ],
        },
    ],
}

export default settings
