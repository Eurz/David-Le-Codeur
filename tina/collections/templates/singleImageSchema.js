export const singleImageSchema = {
    name: 'singleImage',
    label: 'Single Image',
    ui: {
        // previewSrc: '/blocks/hero.png',
        defaultItem: {
            title: 'Simple image',
            textAlt: 'David le codeur',
        },
        itemProps: (item) => {
            return { label: item?.title }
        },
    },
    fields: [
        { name: 'title', label: 'Title', type: 'string' },
        {
            name: 'img',
            label: 'Image',
            type: 'image',
            ui: {
                description: 'Choose an image for banner',
            },
        },
        {
            name: 'textAlt',
            label: 'Alternative text',
            type: 'string',
        },
    ],
}
