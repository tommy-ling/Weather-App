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