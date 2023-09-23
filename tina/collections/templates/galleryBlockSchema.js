export const galleryBlockSchema = {
    name: 'galleryContent',
    label: 'Gallery content',
    ui: {
        // previewSrc: '/blocks/hero.png',
        defaultItem: {
            title: 'New gallery',
            description:
                'Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.',
        },
        itemProps: (item) => {
            return { label: item?.title || 'Gallery name' }
        },
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'string',
        },
        {
            name: 'gallery',
            label: 'Items',
            type: 'object',
            list: true,
            ui: {
                itemProps: (item) => {
                    // Field values are accessed by item?.<Field name>
                    return { label: item.title || 'New item' }
                },
            },
            fields: [
                { name: 'title', label: 'Title', type: 'string' },
                {
                    name: 'item',
                    label: 'ITEM',
                    type: 'reference',
                    collections: ['project', 'event'],
                    ui: {
                        label: 'Projets disponibles',
                        description: 'Choisissez un projet dans la liste',
                        format: (value, name, field) => {
                            return
                        },
                        validate: (value, allValues, meta, field) => {
                            if (value === undefined || value === '') {
                                return 'Choose a project'
                            }
                        },
                    },
                },
            ],
        },
    ],
}
