import { backgroundImage, text } from './index.js'
import { fetchData } from './fetch.js'

export async function weatherBackground(name) {
  const data = await fetchData(name)
  const code = data.current.condition.code
  const isDay = data.current.is_day

  if(code===1003 && isDay===1) {
    backgroundImage.style.background = 'url(./pics/partlycloudy.jpeg)'
    text.forEach(el => {
      el.style.color = 'black'
    })
  }
  if(code===1000 && isDay===1) {
    backgroundImage.style.background = 'url(./pics/sunny.jpeg)'
    text.forEach(el => {
      el.style.color = 'black'
    })
  }
  if(code===1000 && isDay===0) {
    backgroundImage.style.background = 'url(./pics/clearnight.jpeg)'
    text.forEach(el => {
      el.style.color = 'white'
    })
  }
  if((code===1006 || code===1009 || code===1063 || code===1066 || code===1069
    || code===1072 || code===1087) && isDay === 1) {
    backgroundImage.style.background = 'url(./pics/mostlycloudy.jpg)'
    text.forEach(el => {
      el.style.color = 'black'
    })
  }
  if((code===1114 || code===1117 || code===1225 || code===1222 || code===1219
    || code===1216 || code===1258 || code===1282) && isDay === 1) {
    backgroundImage.style.background = 'url(./pics/snow.jpeg)'
    text.forEach(el => {
      el.style.color = 'black'
    })
  }
  if((code===1180 || code===1183 || code===1186 || code===1189 || code===1192
    || code===1240 || code===1273 || code===1150 || code===1153 || code===1168
    || code===1171 || code===1198) && isDay === 1) {
    backgroundImage.style.background = 'url(./pics/rain.jpeg)'
    text.forEach(el => {
      el.style.color = 'white'
    })
  }
  if((code===1195 || code===1201 || code===1243 || code===1246 || code===1252
    || code===1276) && isDay === 1) {
    backgroundImage.style.background = 'url(./pics/heavyrain.jpeg)'
    text.forEach(el => {
      el.style.color = 'white'
    })
  }
  if((code===1276 || code===1279) && (isDay === 1 || isDay ===0)) {
    backgroundImage.style.background = 'url(./pics/storm.jpeg)'
    text.forEach(el => {
      el.style.color = 'white'
    })
  }
  if((code===1204 || code===1207 || code===1237 || code===1249 || code===1261
    || code===1264) && isDay === 1) {
    backgroundImage.style.background = 'url(./pics/sleet.jpeg)'
    text.forEach(el => {
      el.style.color = 'black'
    })
  }
  if((code===1030 || code===1135 || code===1147) && isDay===1) {
    backgroundImage.style.background = 'url(./pics/fog.jpeg)'
    text.forEach(el => {
      el.style.color = 'black'
    })
  }
  if((code===1210 || code===1213 || code===1255) && isDay===1) {
    backgroundImage.style.background = 'url(./pics/lightsnow.jpeg)'
    text.forEach(el => {
      el.style.color = 'black'
    })
  }
  if((code!==1000 && code!==1276 && code!==1279) && isDay===0) {
    backgroundImage.style.background = 'url(./pics/night.jpeg)'
    text.forEach(el => {
      el.style.color = 'white'
    })
  }
  backgroundImage.style.backgroundSize = 'cover'
}