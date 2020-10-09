import { useLocation } from './LocationDataProvider.js'
import { Location } from './Location.js'


export const LocationList = () => {
    const contentElement = document.querySelector(".contentContainer__left")

    const locations = useLocation()
    // console.log(locations)

    let locationHTMLRepresentations = ""
    for (const location of locations) {
        locationHTMLRepresentations += Location(location)
    }

    contentElement.innerHTML += `
    <section class="travel__quotes">
    <h2>Go Fish</h2>
    <div class="location__list">
    </div>
    </section>
    `
}