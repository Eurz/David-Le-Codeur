import { oswald } from '@/app/utils/fonts'
import { tinaField } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import ButtonAction from './ButtonAction'

export default function HeroBanner({ data }) {
    const { image } = data
    const imageList = image?.map((item, i) => {
        const image =
            item.src !== '' || null !== item.src ? item.src : '/pell-mell.svg'
        console.log({ src: image })
        return (
            <div
                key={`${item.name}${i}`}
                className="hero-img hero2"
                style={{
                    backgroundImage: `url(${image})`,
                }}
                data-tina-field={tinaField(item, 'name')}
            >
                {/* <Image src={item.src} width={200} height={200} alt='eee' */}
                <div className="name-overlay">
                    <div className="hero-name">{item.name}</div>
                </div>
            </div>
        )
    })

    return (
        <>
            <section
                className="hero-wrapper row"
                data-tina-field={tinaField(data, 'headline')}
            >
                <div className="row-section">
                    <div className="presentation">
                        <div className="text-infos">
                            <h1 className={`${oswald.className} title-h2`}>
                                ` {`${data.headline}`}
                                <span>{`${data.tagline}`}`</span>
                            </h1>
                            <TinaMarkdown content={data.text} />
                            {data.actions?.map((action) => {
                                return (
                                    <ButtonAction
                                        key={action.link}
                                        actions={action}
                                    />
                                )
                            })}
                        </div>

                        <div className="banner-hero">
                            <div className="hero">{imageList}</div>
                        </div>
                    </div>
                </div>
                <div className="scroll">
                    Soyez curieux
                    <i className="fa-solid fa-hand-point-right"></i>
                </div>
            </section>
        </>
    )
}
