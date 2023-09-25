'use client'

import ReactDOM from 'react-dom'

export function PreloadResources() {
    // ReactDOM.preload('...', { as: '...' })
    ReactDOM.preconnect('https://fonts.googleapis.com')
    ReactDOM.preconnect('https://fonts.gstatic.com', {
        crossOrigin: 'crossorigin',
    })
    // ReactDOM.prefetchDNS('...')

    return null
}
