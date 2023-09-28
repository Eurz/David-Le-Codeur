'use client'

import ReactDOM from 'react-dom'

export function PreloadResources() {
    // ReactDOM.preload('...', { as: '...' })
    ReactDOM.preconnect('https://fonts.googleapis.com')
    ReactDOM.preconnect('https://fonts.gstatic.com', {
        crossOrigin: 'crossorigin',
    })
    ReactDOM.preconnect(
        'https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Roboto&family=Roboto+Condensed&family=Poppins&display=swap'
    )
    // ReactDOM.prefetchDNS('...')

    return null
}
