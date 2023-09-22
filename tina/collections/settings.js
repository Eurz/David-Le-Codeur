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
            type: 'object',
            name: 'header',
            label: 'Header',
            fields: [
                { name: 'name', label: 'Nom du site', type: 'string' },
                { name: 'tagline', label: 'Slogan', type: 'string' },
                { name: 'logo', label: 'Logo', type: 'image' },
                { name: 'favicon', label: 'Favicon', type: 'image' },
                {
                    type: 'object',
                    label: 'Nav Links',
                    name: 'nav',
                    list: true,
                    ui: {
                        itemProps: (item) => {
                            return { label: item?.label }
                        },
                        defaultItem: {
                            href: 'home',
                            label: 'Home',
                        },
                    },
                    fields: [
                        {
                            type: 'string',
                            label: 'Link',
                            name: 'href',
                        },
                        {
                            type: 'string',
                            label: 'Label',
                            name: 'label',
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
                    type: 'string',
                    label: 'Facebook',
                    name: 'facebook',
                },
                {
                    type: 'string',
                    label: 'Twitter',
                    name: 'twitter',
                },
                {
                    type: 'string',
                    label: 'Instagram',
                    name: 'instagram',
                },
                {
                    type: 'string',
                    label: 'Github',
                    name: 'github',
                },
            ],
        },

        {
            type: 'object',
            name: 'footer',
            label: 'Footer',
            fields: [{ name: 'copyright', label: 'Copyright', type: 'string' }],
        },
    ],
}

export default settings
