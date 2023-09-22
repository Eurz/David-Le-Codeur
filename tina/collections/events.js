const events = {
    name: 'event',
    label: 'Events',
    path: 'content/events',
    format: 'md',
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

    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'string',
            isTitle: true,
            required: true,
        },

        {
            name: 'eventsList',
            label: 'Events list',
            type: 'object',
            list: true,
            ui: {
                defaultItem: { title: 'New Event', featured: false },
                itemProps: (item) => {
                    const date = item.textDate ? `( ${item.textDate} )` : ''
                    return {
                        label: `${item?.title} ${date}`,
                    }
                },
            },
            fields: [
                { name: 'title', label: 'Event title', type: 'string' },
                {
                    name: 'featured',
                    label: 'Featured',
                    type: 'boolean',
                },
                { name: 'startDate', label: 'Start', type: 'datetime' },
                { name: 'endDate', label: 'End', type: 'datetime' },
                { name: 'textDate', label: 'Text date', type: 'string' },

                { name: 'entreprise', label: 'Etablissement', type: 'string' },
                { name: 'place', label: 'Lieu', type: 'string' },
                {
                    name: 'description',
                    label: 'Description',
                    type: 'string',
                    ui: { component: 'textarea' },
                    // isBody: true,
                    // required: true,
                },
            ],
        },
    ],
}
export default events
