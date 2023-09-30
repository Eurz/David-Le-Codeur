const posts = {
    name: 'post',
    label: 'Posts',
    path: 'content/posts',
    format: 'md',
    defaultItem: () => {
        return {
            title: 'New Post Dadou',
            //   date: new Date().toISOString(),
        }
    },
    ui: {
        beforeSubmit: async ({ form, cms, values }) => {
            // if (form.crudType === 'create') {
            return {
                ...values,
                createdAt: new Date().toISOString(),
            }
            // }
        },
        filename: {
            readonly: true,
            // Example of using a custom slugify function
            slugify: (values) => {
                // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
                return `${values?.title?.toLowerCase().replace(/ /g, '-')}`
            },
        },
        router: ({ document }) => {
            return '/posts'
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
            name: 'banner',
            label: 'Banner image',
            type: 'image',
            ui: {
                component: 'image',
                uploadDir: () => '/posts/',
            },
        },
        {
            name: 'body',
            label: 'Body',
            type: 'rich-text',
            isBody: true,
        },
        // {
        //     name: 'slug',
        //     label: 'Slug',
        //     type: 'string',
        // },
        {
            name: 'tag',
            label: 'tags',
            type: 'string',
            list: true,

            options: [
                { value: 'nextjs', label: 'Next JS' },
                { value: 'reactjs', label: 'React ' },
                { value: 'symfony', label: 'Symfony' },
                { value: 'php', label: 'Php' },
            ],
        },
    ],
}
export default posts
