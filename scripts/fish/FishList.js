import { Fish } from './fish/Fish.js'
// Imports useFish from FishDataProvider
import { useFish } from './fish/FishDataProvider.js'

// Exports the funsction FishList
export const FishList = () => {
        
    // Get reference to the  `<article class="content">` element
    const contentElement = document.querySelector(".contentContainer__left")
    
    const fishes = useFish()

    let fishHTMLRepresentations = ""
    for (const fish of fishes) {
        fishHTMLRepresentations += Fish(fish)
    }

    // Add to exisiting HTML in the content element
    contentElement.innerHTML += `
        <section class="fishList">
        <h2>My Fish</h2>
        <div class="fishContainer">
        ${fishHTMLRepresentations}
        </div>
        </section>
`
}