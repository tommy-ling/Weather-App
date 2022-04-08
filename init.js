import { weatherBackground } from './background.js'
import { fetchCurrentData, hoursList, renderHourlyForecast, dailyList, renderDailyForecast } from './fetch.js'

export async function init (name) {
  await fetchCurrentData(name)
  await weatherBackground(name)

  const forecast = document.querySelector('.forecast ul')
  const future = document.querySelector('.future ul')

  const forecastHoursList =  await hoursList(name)
  forecast.innerHTML = ''
  forecast.insertAdjacentHTML('afterbegin', renderHourlyForecast(forecastHoursList))

  const forecastDailyList =  await dailyList(name)
  future.innerHTML = ''
  future.insertAdjacentHTML('afterbegin', renderDailyForecast(forecastDailyList))

  // const forecastHoursList =  await hoursList(name)
  // document.querySelector('.forecast ul').innerHTML = renderHourlyForecast(forecastHoursList)
  // const forecastDailyList =  await dailyList(name)
  // document.querySelector('.future ul').innerHTML = renderDailyForecast(forecastDailyList)
}