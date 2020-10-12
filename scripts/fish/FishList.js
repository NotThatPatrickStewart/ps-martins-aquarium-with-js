import { Fish } from './Fish.js'
// Imports useFish from FishDataProvider
import { mostHolyFish, serfFish, soldierFish } from './FishDataProvider.js'

const buildFishContainerHTML = (arrayOfFish) => {
    
    // const fishes = mostHolyFish()

    let fishHTMLRepresentations = ""
    for (const fish of arrayOfFish) {
        fishHTMLRepresentations += Fish(fish)
    }

    return fishHTMLRepresentations
}

// Exports the funsction FishList
export const FishList = () => {

    // Get reference to the  `<article class="content">` element
    const contentElement = document.querySelector(".contentContainer__left")

    // HTML for holy fish 
    const holyFish = mostHolyFish()
    // console.log(holyFish)

    const holyFishHTML = buildFishContainerHTML(holyFish)
    // console.log(holyFishHTML)

    // HTML for soldier fish
    const soldierFishes = soldierFish()
    const soldierFishHTML = buildFishContainerHTML(soldierFishes)

    // HTML for serf fish
    const serfFishes = serfFish()
    const serfFishHTML = buildFishContainerHTML(serfFishes)

    contentElement.innerHTML += `
        <section class="fishList">
        <h2>My Fish</h2>
        <div class="fishContainer">
        ${holyFishHTML}
        ${soldierFishHTML}
        ${serfFishHTML}
        </div>
        </section>
`
}