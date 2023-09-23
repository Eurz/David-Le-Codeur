import { defineConfig } from 'tinacms'
import posts from './collections/posts'
import settings from './collections/settings'
import pages from './collections/pages'
import models from './collections/models'
import projects from './collections/projects'
import events from './collections/events'

// Your hosting provider likely exposes this as an environment variable
const branch =
    process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'version-2'

export default defineConfig({
    branch,
    clientId: process.env.TINA_PUBLIC_CLIENT_ID, // Get this from tina.io
    token: process.env.TINA_TOKEN, // Get this from tina.io

    build: {
        outputFolder: 'admin',
        publicFolder: 'public',
    },
    media: {
        tina: {
            mediaRoot: 'uploads',
            publicFolder: 'public',
        },
    },
    schema: {
        collections: [posts, settings, pages, models, projects, events],
    },
})
