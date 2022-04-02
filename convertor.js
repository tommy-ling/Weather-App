function tempConvertToF (celsius) {return Math.round(celsius*(9/5)) + 32}
function kmToMile (km) {return Math.round(km/1.609344)}
function mmToInch (mm) {return Math.round(mm/25.4)}
function tempConvertToC (fahrenheit) {return Math.round((fahrenheit-32)* (5/9))}
function mToKm (mile) {return Math.round(mile*1.609344)}
function inToMm (inch) {return Math.round(inch*25.4)}

export function toImperial(tempList, currentWindspeed, hourlyWindspeed, currentPrecip) {
  for(let item of tempList) {
    item.forEach(el => {
      el.innerText = tempConvertToF(parseInt(el.innerText))
    })
  }
  currentWindspeed.innerText = kmToMile(parseInt(currentWindspeed.innerText))
  hourlyWindspeed.forEach(el => {
    el.innerText = kmToMile(parseInt(el.innerText))
  })
  currentPrecip.innerText = mmToInch(parseInt(currentPrecip.innerText))
}

export function toMetric(tempList, currentWindspeed, hourlyWindspeed, currentPrecip) {
  for(let item of tempList) {
    item.forEach(el => {
      el.innerText = tempConvertToC(parseInt(el.innerText))
    })
  }
  currentWindspeed.innerText = mToKm(parseInt(currentWindspeed.innerText))
  hourlyWindspeed.forEach(el => {
    el.innerText = mToKm(parseInt(el.innerText))
  })
  currentPrecip.innerText = inToMm(parseInt(currentPrecip.innerText))
}