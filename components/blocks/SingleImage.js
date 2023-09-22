import Image from 'next/image'
import { tinaField } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

const imageStyle = {
    // borderRadius: '50%',
    // border: '1px solid #fff',
    width: '100%',
    // height: 'auto',
}
export default function SingleImage({ data }) {
    console.log(data)
    return (
        <section className="row">
            <Image
                src={data.img}
                width={600}
                height={150}
                // sizes="(max-width: 998px) 70%"
                alt={data.textAlt ?? ''}
                style={imageStyle}
                data-tina-field={tinaField(data, 'img')}
            ></Image>
        </section>
    )
}
