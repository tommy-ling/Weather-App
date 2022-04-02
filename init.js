import { weatherBackground } from './background.js'
import { fetchCurrentData, hoursList, renderHourlyForecast, dailyList, renderDailyForecast } from './fetch.js'

export async function init (name) {
  await fetchCurrentData(name)
  const forecastHoursList =  await hoursList(name)
  document.querySelector('.forecast ul').innerHTML = renderHourlyForecast(forecastHoursList)
  const forecastDailyList =  await dailyList(name)
  document.querySelector('.future ul').innerHTML = renderDailyForecast(forecastDailyList)
  await weatherBackground(name)
}