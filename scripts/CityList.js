import { getWalkers } from "./database.js"
import { getWalkerCities } from "./database.js"

const walkers = getWalkers()
const cities = getWalkerCities()


export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const currentCity of cities) {
        citiesHTML += `<li>${currentCity.name}</li>`
    }
   
    citiesHTML += "</ol>"

    return citiesHTML
}

