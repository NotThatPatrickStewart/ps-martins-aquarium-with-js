import { Location } from './Location.js'
import { useLocation } from './LocationDataProvider.js'

export const LocationList = () => {
    const contentElement = document.querySelector(".contentContainer__left")

    const locations = useLocation()
    // console.log(locations)

    let locationHTMLRepresentations = ""
    for (const location of locations) {
        locationHTMLRepresentations += Location(location)
    }

    contentElement.innerHTML += `
    <section class="harvest__locations">
    <h2>Go Fish</h2>
    <div class="locationsContainer">
    ${locationHTMLRepresentations}
    </div>
    </section>
    `
}