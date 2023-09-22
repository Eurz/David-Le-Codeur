// export const eventBlockSchema = {
//     name: 'event',
//     label: 'Events',

//     ui: {
//         // previewSrc: '/blocks/hero.png',
//         defaultItem: {
//             title: 'Events list',
//         },
//         itemProps: (item) => {
//             return { label: item?.title }
//         },
//     },
//     fields: [
//         {
//             name: 'title',
//             label: 'Event list title',
//             type: 'string',
//         },
//         {
//             name: 'eventItem',
//             label: 'Event',
//             type: 'object',
//             list: true,
//             ui: {
//                 defaultItem: { title: 'New Event' },
//                 itemProps: (item) => {
//                     return { label: item?.title }
//                 },
//             },
//             fields: [
//                 { name: 'title', label: 'title', type: 'string' },
//                 { name: 'startDate', label: 'Start', type: 'datetime' },
//                 { name: 'endDate', label: 'End', type: 'datetime' },
//                 { name: 'entreprise', label: 'End', type: 'string' },
//                 { name: 'place', label: 'Lieu', type: 'string' },
//                 {
//                     name: 'description',
//                     label: 'Description',
//                     type: 'string',
//                     ui: { component: 'textarea' },
//                     // isBody: true,
//                     // required: true,
//                 },
//             ],
//         },
//     ],
// }

export const eventBlockSchema = {
    name: 'event',
    label: 'Events',

    fields: [
        {
            name: 'eventList',
            label: 'Events',
            type: 'reference',
            collections: ['event'],
        },
    ],
}
