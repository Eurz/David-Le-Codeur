import { Fragment } from 'react'
import BarCode from '../ui/BarCode'
import { Block } from './Blocks'

export default function TemplateTwoCols({ data }) {
    return (
        <section className="main row">
            <div className="left">
                {/* <Blocks blocks={data.colunOne} /> */}
                {data.columnOne?.map((block, i) => {
                    return (
                        <Fragment key={`${block.__typename}-${i}`}>
                            <Block {...block} />
                        </Fragment>
                    )
                })}
            </div>
            <div className="right">
                {data.columnTwo?.map((block, i) => {
                    return (
                        <>
                            <Fragment key={`${block.__typename}-${i}-${i}`}>
                                <Block {...block} />
                            </Fragment>
                        </>
                    )
                })}
                <BarCode />
            </div>
        </section>
    )
}
