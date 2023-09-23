export const eventBlockSchema = {
    name: 'event',
    label: 'Events',
    ui: {
        // previewSrc: 'https://via.placeholder.com/300/92c952',
        defaultItem: {
            title: 'Simple contents',
        },
        itemProps: (item) => {
            return { label: item.title ?? item.eventList }
        },
    },

    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'string',
        },
        {
            name: 'eventList',
            label: 'Events',
            type: 'reference',
            collections: ['event'],
        },
    ],
}
