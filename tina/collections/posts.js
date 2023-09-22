const posts = {
    name: 'post',
    label: 'Posts',
    path: 'content/posts',
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
        },
        { name: 'banner', label: 'Banner image', type: 'image' },
        {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
        },
    ],
}
export default posts
