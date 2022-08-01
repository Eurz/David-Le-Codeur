function displayWeatherInfos(data) {
    // console.log('DisplayWeatherInfos = ', data)
    const lon = data.lon
    const lat = data.lat
    const temperature = data.current.temp
    const city = data.city
    const feelsLike = Math.round(data.current.feels_like)
    const humidity = data.current.humidity
    const pressure = data.current.pressure
    const description = data.current.weather[0].description
    const condition = data.current.weather[0].main
    const date = new Date()
    const dailyWeather = data.daily

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }

    const dateFormat = new Intl.DateTimeFormat('fr-FR', options).format(date)
    const day = new Intl.DateTimeFormat('fr-FR', { weekday: 'long' }).format(
        date
    )

    let dayResults = ''
    const rootEl = document.querySelector('#daily-weather')
    rootEl.innerHTML = ''

    dailyWeather.forEach((day) => {
        const target = createDiv('day-infos')
        const dayDate = formatDate(new Date(day.dt * 1000))
        dayResults = `<div>${dayDate.day}</div>`
        dayResults += `<div>${Math.round(day.temp.day)} °C</div>`
        dayResults += `<div>${classFromWeather(
            day.weather[0].main
        )}  ${capitalize(day.weather[0].description)}</div>`
        dayResults += `<div>${Math.round(day.temp.min)} °C / ${Math.round(
            day.temp.max
        )} °C</div>`
        target.innerHTML = dayResults

        rootEl.appendChild(target)
    })

    document.querySelector('#feels_like').textContent = feelsLike + ' °C'
    document.querySelector('#humidity').textContent = humidity + ' %'
    document.querySelector('#pressure').textContent = pressure + ' hPa'
    document.querySelector('#conditions').textContent = capitalize(description)
    document.querySelector('#city-name').textContent = city

    document.querySelector('#currentDay').textContent = capitalize(day)
    document.querySelector('#currentDate').textContent = dateFormat
    document.querySelector('#temperature').textContent =
        Math.round(temperature) + '°C'
    document.body.className = condition.toLowerCase()

    document.querySelector('.infos i.wi').className = weatherIcons[condition]
}
