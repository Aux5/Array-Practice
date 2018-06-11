const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

const planetEl = document.getElementById("planets")

console.log(planetEl)

const nameIt = function (planet){
    switch(planet){
        case "mercury":
        planetEl.appendChild(document.createTextNode("mercury"))
        break;
        case "venus":
        planetEl.appendChild(document.createTextNode(" venus"))
        break;
        case "earth":
        planetEl.appendChild(document.createTextNode(" earth"))
        break;
        case "mars":
        planetEl.appendChild(document.createTextNode(" mars"))
        break;
        case "jupiter":
        planetEl.appendChild(document.createTextNode(" jupiter"))
        break;
        case "saturn":
        planetEl.appendChild(document.createTextNode(" saturn"))
        break;
        case "uranus":
        planetEl.appendChild(document.createTextNode(" uranus"))
        break;
        case "neptune":
        planetEl.appendChild(document.createTextNode(" neptune"))
        break;
    }
}
        planets.forEach(nameIt);





        
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const capitalPlanets = planets.map(function(capital){
switch (capital){
    case "mercury":
        return "mercury".toUpperCase()
        break
    case "venus":
        return "venus".toUpperCase()
        break
    case "earth":
        return "earth".toUpperCase()
        break
    case "mars":
        return "mars".toUpperCase()
        break
    case "jupiter":
        return "jupiter".toUpperCase()
        break
    case "saturn":
        return "saturn".toUpperCase()
        break
    case "uranus":
        return "uranus".toUpperCase()
        break
    case "neptune":
        return "neptune".toUpperCase()
        break
}
})
console.log(capitalPlanets)
planetEl.appendChild(document.createTextNode(capitalPlanets))





/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
const eees = planets.filter(ev => {
    const containE = (ev.includes("e"))
    return containE
})
console.log(eees)
planetEl.appendChild(document.createTextNode(eees))





// Use the reduce method to create a sentence from the words in the following array
const words = ["The", " early", " bird", " might", " get", " the", " worm,", " but", " the", " second", " mouse", " gets", " the", " cheese."]
const sentence = words.reduce(
    (word, next) => word + next
)
console.log(sentence)
planetEl.appendChild(document.createTextNode(sentence))