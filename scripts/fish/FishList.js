import { Fish } from './Fish.js'
// Imports useFish from FishDataProvider
import { useFish } from './FishDataProvider.js'

// Exports the funsction FishList
export const FishList = () => {
        
    // Get reference to the  `<article class="content">` element
    const contentElement = document.querySelector(".contentContainer__left")
    
    const fishes = useFish()

    let fishHTMLRepresentations = ""
    for (const fish of fishes) {
        fishHTMLRepresentations += Fish(fish)
    }

    
    contentElement.innerHTML += `
        <section class="fishList">
        <h2>My Fish</h2>
        <div class="fishContainer">
        ${fishHTMLRepresentations}
        </div>
        </section>
`
}