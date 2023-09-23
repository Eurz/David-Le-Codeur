import Image from 'next/image'
import { tinaField } from 'tinacms/dist/react'

const imageStyle = {
    // borderRadius: '50%',
    // border: '1px solid #fff',
    width: '100%',
    // height: 'auto',
}
export default function SingleImage({ data }) {
    return (
        <section className="row">
            {data.img && (
                <Image
                    src={data.img ?? '/default-image.svg'}
                    width={600}
                    height={600}
                    // sizes="(max-width: 998px) 70%"
                    alt={data.textAlt ?? ''}
                    style={imageStyle}
                    data-tina-field={tinaField(data, 'img')}
                ></Image>
            )}
        </section>
    )
}
