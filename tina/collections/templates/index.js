import { contentBlockSchema } from './contentBlockSchema'
import { eventBlockSchema } from './eventBlockSchema'
import { galleryBlockSchema } from './galleryBlockSchema'
import { heroBlockSchema } from './heroBlockSchema'
import { singleImageSchema } from './singleImageSchema'
import { template2ColsBlockSchema } from './template2ColsBlockSchema'

const templates = [
    contentBlockSchema,
    galleryBlockSchema,
    heroBlockSchema,
    template2ColsBlockSchema,
    eventBlockSchema,
    singleImageSchema,
]

export default templates
