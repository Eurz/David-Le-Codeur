export const contentBlockSchema = {
    name: 'simpleContent',
    label: 'Simple content',
    ui: {
        // previewSrc: '/blocks/hero.png',
        defaultItem: {
            title: 'Simple contents',
            featured: false,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis justo eu ante volutpat lacinia. Aenean aliquet sit amet neque. ',
        },
        itemProps: (item) => {
            return { label: item?.title }
        },
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'string',
        },
        {
            name: 'featured',
            label: 'Featured',
            type: 'boolean',
        },
        {
            name: 'description',
            label: 'Description',
            type: 'rich-text',
            templates: [
                {
                    name: 'Callout',
                    label: 'Callout',
                    fields: [
                        {
                            name: 'message',
                            label: 'Message',
                            type: 'string',
                        },
                    ],
                },
            ],
        },
    ],
}
