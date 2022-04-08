import { init } from './init.js'
import { toImperial, toMetric } from './convertor.js'
import { autoComplete, renderOption, toggleOnClick } from './autocomplete.js'
import { debounce } from './debounce.js'

export const backgroundImage = document.querySelector('.container')
export const text = document.querySelectorAll('.timebar h1, h3')

const search = document.querySelector('input')
const dropdown = document.querySelector('.dropdown')
const resultsWrapper = document.querySelector('.results')

// Initial values
await init('Toronto')

// Search
const onInput = async event => {
  const cityList = await autoComplete(event.target.value)

  if(!cityList.length) {
    dropdown.classList.remove('is-active');
    return
  }

  resultsWrapper.innerHTML = ''
  dropdown.classList.add('is-active');

  for(let list of cityList) {
    const option = document.createElement('a')
    option.classList.add('dropdown-item')
    option.insertAdjacentHTML('afterbegin', renderOption(list))
    option.addEventListener('click', async (event) => {
      dropdown.classList.remove('is-active');
      search.value = list[0];
      await init(list[0])
      toggleOnClick()
    });

    resultsWrapper.appendChild(option)
  }
}

search.addEventListener('input', debounce(onInput))

document.addEventListener('click', event => {
  if(!search.contains(event.target)) {
    dropdown.classList.remove('is-active')
  }
})

// C/F Conversion
const button = document.querySelector('button')

button.addEventListener('click', event => {
  const hidden = document.querySelectorAll('span.hidden')
  const visible = document.querySelectorAll('span.toggle')
  hidden.forEach(el => {
    el.classList.toggle('hidden')
    el.classList.toggle('toggle')
  })
  visible.forEach(el => {
    el.classList.toggle('hidden')
    el.classList.toggle('toggle')
  })

  const buttonText = document.querySelector('button span.toggle').innerText
  const currentWindspeed = document.querySelector('.current h4.windspeed')
  const hourlyWindspeed = document.querySelectorAll('.forecast h4.windspeed')
  const currentPrecip = document.querySelector('.current h4.precip')
  const tempList = [
    document.querySelectorAll('.current h4.temp'),
    document.querySelectorAll('.forecast h4.temp'),
    document.querySelectorAll('.future h4.temp')
  ]

  if(buttonText === '°C') {
    toImperial(tempList, currentWindspeed, hourlyWindspeed, currentPrecip)
  } 
  if(buttonText === '°F') {
    toMetric(tempList, currentWindspeed, hourlyWindspeed, currentPrecip)
  }
})