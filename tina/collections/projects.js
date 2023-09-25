const projects = {
    name: 'project',
    label: 'Projects',
    path: 'content/projects',
    ui: {
        defaultItem: () => {
            return {
                title: 'New project',
                isPublished: false,
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
    },
    fields: [
        {
            name: 'title',
            type: 'string',
            label: 'Title',
            isTitle: true,
            required: true,
        },
        {
            name: 'subtitle',
            type: 'string',
            label: 'Subtitle',
        },
        {
            name: 'isPublished',
            type: 'boolean',
            label: 'Publier',
        },
        { name: 'thumb', label: 'Thumnail', type: 'image' },
        { name: 'link', label: 'Project link', type: 'string' },
        {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
        },
        { name: 'stack', label: 'Stack', type: 'string', list: true },
    ],
}
export default projects
