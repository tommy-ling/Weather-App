const buttonSpan = document.querySelectorAll('button span')
const currentSpan = document.querySelectorAll('.current span')
const forecastSpan = document.querySelectorAll('.forecast span')
const futureSpan = document.querySelectorAll('.future span')
const spanList = [forecastSpan, futureSpan]

export async function autoComplete(searchTerm) {
  const { data } = await axios.get('http://api.weatherapi.com/v1/search.json', {
    params: {
      key: '9922077befa8492fbaa111241222803',
      q: searchTerm
    }
  })
  let cityList = []
  data.forEach(el => {
    cityList.push([el.name, el.country]) 
  })
  return cityList
}

export function renderOption(list) {
  return `
  ${list[0]}, ${list[1]}
  `
}

export function toggleOnClick() {
  if(buttonSpan[0].classList[0] !== 'toggle') {
    buttonSpan[0].classList.add('toggle')
    buttonSpan[0].classList.remove('hidden')
  }
  if(buttonSpan[1].classList[0] !== 'hidden') {
    buttonSpan[1].classList.add('hidden')
    buttonSpan[1].classList.remove('toggle')
  }
  for(let i = 1; i < currentSpan.length; i+=2) {
    if(currentSpan[i].classList[0] !== 'toggle') {
      currentSpan[i].classList.add('toggle')
      currentSpan[i].classList.remove('hidden')
    }
  }
  for(let i = 2; i < currentSpan.length; i+=2) {
    if(currentSpan[i].classList[0] !== 'hidden') {
      currentSpan[i].classList.add('hidden')
      currentSpan[i].classList.remove('toggle')
    }
  }
  spanList.forEach(el => {
    for(let i = 0; i < el.length; i+=2) {
      if(el[i].classList[0] !== 'toggle') {
        el[i].classList.add('toggle')
        el[i].classList.remove('hidden')
      }
    }
    for(let i = 1; i < el.length; i+=2) {
      if(el[i].classList[0] !== 'hidden') {
        el[i].classList.add('hidden')
        el[i].classList.remove('toggle')
      }
    }
  })
}