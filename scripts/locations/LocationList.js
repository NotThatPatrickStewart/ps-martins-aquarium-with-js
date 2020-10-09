


export const LocationList = () => {
    const contentElement = document.querySelector(".travel__locations")

    const location = useLocation

    let locationHTMLRepresentations = ""
    for const (location of locations) {
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