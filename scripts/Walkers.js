import { getWalkers, getWalkerCities, getCities } from "./database.js"
import { CityList } from "./CityList.js"


document.addEventListener(
    "click",  
    (clickEvent) => {
    
        const itemClicked = clickEvent.target

            console.log(itemClicked.id)

        if (itemClicked.id.startsWith("walker")) {

        const [,walkerId] = itemClicked.id.split("--")
        theseWalkers(walkerId)
         
            // for (const walker of walkers) {
             
            //     if (walker.id === parseInt(walkerId)) {
            //         window.alert(`${walker.name} services ${walker.city}`)
            //     }
            // }
        }
    }
)




 
const walkers = getWalkers()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }
   
    return walkerHTML += "</ul>"
   
}

const walkerCities = getWalkerCities()
const cities = getCities()

const filterWalkerCitiesByWalker = (walker) => {
    const assignments = []
    for (const assignment of walkerCities) {
        if (assignment.walkerId === walker.id) {
            assignments.push(assignment)
        }
    }
    return assignments
}

const assignedCityNames = (assignments) => {
    let cityNames = ""
    for (const city of cities) {
        for (const assignment of assignments) {

            if (city.id === assignment.cityId) {
                cityNames += `${city.name}, `
            } 
        }
    }
           return cityNames

}

const theseWalkers = (walkerId) => {
    for (const walker of walkers) {
    if (walker.id === parseInt(walkerId)) {
        const assignments = filterWalkerCitiesByWalker(walker)
        const cities = assignedCityNames(assignments)
        window.alert(`${walker.name} services ${cities}`)
    }
}

}

