/**
 *
 * @param {String} word
 * @returns word with first letter capitalized
 */
function capitalize(word) {
    const result = word[0].toUpperCase() + word.slice(1)
    return result
}

/**
 *
 * @param {String} className
 * @returns HTMLElement div with the "className" class
 */
function createDiv(className) {
    const div = document.createElement('div')
    div.className = className
    return div
}

/**
 *
 * @param {Number} timestamp - Timestamp to format into standard date format
 * @param {Object} userOptions - Options to format the date
 * @param {String} lang - User's language
 * @returns {Object} - Differents date format
 */
function formatDate(timestamp, userOptions = {}, lang = 'fr-FR') {
    const defaultOptions = {
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        year: 'numeric',
    }
    const options = Object.assign({}, defaultOptions, userOptions)
    console.log('Options = ', options)

    const day = new Intl.DateTimeFormat(lang, {
        weekday: 'long',
    }).format(timestamp)
    const currentDay = new Intl.DateTimeFormat(lang, {
        weekday: 'long',
    }).format(Date.now())
    const dateFormat = new Intl.DateTimeFormat('fr-FR', defaultOptions).format(
        timestamp * 1000
    )
    return { day: day, dateFormat }
}

const weatherIcons = {
    Rain: 'wi wi-day-rain',
    Clouds: 'wi wi-day-cloudy',
    Clear: 'wi wi-day-sunny',
    Snow: 'wi wi-day-snow',
    Mist: 'wi wi-day-fog',
    Drizzle: 'wi wi-day-sleet',
}
/**
 *
 * @param {String} condition
 * @returns Icon from Weather Icons
 */
function weatherIcon(condition) {
    return `<i class='wi ${weatherIcons[condition]}'></i>`
}

/**
 *
 * @param {ClassName} selector
 * @returns HTMLElement to target
 */
const selectElement = (selector) => {
    const element = document.querySelector(selector)
    if (element) return element
    throw new Error(
        `Something went wrong! Make sure that ${selector} exists/is typed correctly.`
    )
}
/**
 *
 * @param {Number} timestamp - Day to displaying for the weather
 * @param {Object} userOptions - Parameters to format the date
 * @param {String} lang - Users's language
 * @returns A date formatted for user
 */
function formatDate(timestamp, userOptions = {}, lang = 'fr-FR') {
    const defaultOptions = {
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        year: 'numeric',
    }
    const options = Object.assign({}, defaultOptions, userOptions)
    // console.log('Options = ', options)

    const day = new Intl.DateTimeFormat(lang, {
        weekday: 'long',
    }).format(timestamp)

    const currentDay = new Intl.DateTimeFormat(lang, {
        weekday: 'long',
    }).format(Date.now())

    const dateFormat = new Intl.DateTimeFormat('fr-FR', defaultOptions).format(
        timestamp * 1000
    )
    return currentDay
}
