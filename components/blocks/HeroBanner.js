import { oswald } from '@/app/utils/fonts'
import { tinaField } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import ButtonAction from './ButtonAction'

export default function HeroBanner({ data }) {
    const { image } = data
    const imageList = image?.map((item, i) => {
        const image =
            item.src === '' || null === item.src ? '/pell-mell.svg' : item.src
        return (
            <div
                key={`${item.name}${i}`}
                className="hero-img hero2"
                style={{
                    backgroundImage: `url(${image})`,
                }}
                data-tina-field={tinaField(item, 'name')}
            >
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
                    {/* <i className="fa-solid fa-hand-point-right"></i> */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 -960 960 960"
                        width="24"
                    >
                        <path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z" />
                    </svg>
                </div>
            </section>
        </>
    )
}
