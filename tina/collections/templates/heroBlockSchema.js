export const heroBlockSchema = {
    name: 'hero',
    label: 'Hero banner',
    ui: {
        previewSrc: 'https://via.placeholder.com/600/92c952',
        defaultItem: {
            tagline: "Here's some text above the other text",
            headline: 'This Big Text is Totally Awesome',
            text: 'dsdsdsds',
        },
    },
    fields: [
        {
            name: 'headline',
            label: 'Headline',
            type: 'string',
        },
        {
            name: 'tagline',
            label: 'Tagline',
            type: 'string',
        },
        {
            name: 'text',
            label: 'Text',
            type: 'rich-text',
            // isBody: true,
            // required: true,
        },
        {
            name: 'actions',
            label: 'Actions',
            type: 'object',
            list: true,
            ui: {
                defaultItem: {
                    label: 'Action Label',
                    type: 'button',
                    icon: true,
                    link: '/',
                },
                // max: 5,
                itemProps: (item) => ({ label: item.label }),
            },
            fields: [
                {
                    label: 'Label',
                    name: 'label',
                    type: 'string',
                },
                // {
                //     label: 'Type',
                //     name: 'type',
                //     type: 'string',
                //     options: [
                //         { label: 'Button', value: 'button' },
                //         { label: 'Link', value: 'link' },
                //     ],
                // },
                {
                    label: 'Icon',
                    name: 'icon',
                    type: 'boolean',
                },
                {
                    label: 'Link',
                    name: 'link',
                    type: 'string',
                },
            ],
        },
        {
            name: 'image',
            label: 'Image',
            type: 'object',
            list: true,
            ui: {
                // defaultItem: {
                //     label: 'Action Label',
                //     type: 'button',
                //     icon: true,
                //     link: '/',
                // },
                itemProps: (item) => ({ label: item.name }),
            },
            fields: [
                {
                    name: 'src',
                    label: 'Image Source',
                    type: 'image',
                    ui: { description: 'salut' },
                },
                {
                    name: 'name',
                    label: 'Name',
                    type: 'string',
                },
            ],
        },
        // {
        //     type: 'string',
        //     label: 'Color',
        //     name: 'color',
        //     options: [
        //         { label: 'Default', value: 'default' },
        //         { label: 'Tint', value: 'tint' },
        //         { label: 'Primary', value: 'primary' },
        //     ],
        // },
    ],
}
