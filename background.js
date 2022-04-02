import { backgroundImage } from './index.js'
import { fetchData } from './fetch.js'

export async function weatherBackground(name) {
  const data = await fetchData(name)
  const code = data.current.condition.code
  if(code === 1003 || code === 1219) {
    backgroundImage.style.background = 'url(./pics/partlycloudy.jpeg)'
  }
  if(code === 1000) {
    backgroundImage.style.background = 'url(./pics/sunny.jpeg)'
  }
}