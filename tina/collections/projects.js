import client from '../__generated__/client'
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
        // { name: 'stack', label: 'Stack', type: 'string', list: true },
        {
            type: 'string',
            name: 'stack',
            label: 'Stack',
            description: 'Tags for this project',
            list: true,
            ui: {
                component: 'tags',
            },
        },
    ],
}
export default projects
// Test
async function getTags() {
    const data = await client.request({
        query: `query queryTags($relativePath: String!) {
            setting(relativePath: $relativePath) {
              ... on Document {
                ... on Setting {
                  posts {
                    tags
                  }
                }
              }
            }
          }`,
        variables: {
            relativePath: 'Global.md',
        },
    })

    const tags = data.data.setting.posts.tags.map((tag) => {
        return { value: tag.toLowerCase(), label: tag }
    })
    console.log(tags)
    return tags
}
