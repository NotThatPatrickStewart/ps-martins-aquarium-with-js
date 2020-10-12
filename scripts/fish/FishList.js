import { Fish } from './Fish.js'
// Imports useFish from FishDataProvider
import { mostHolyFish, soldierFish } from './FishDataProvider.js'

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

    // for (const fish of soldierFishes) {
    //     fishHTMLRepresentations += Fish(fish)
    // }

    contentElement.innerHTML += `
        <section class="fishList">
        <h2>My Fish</h2>
        <div class="fishContainer">
        ${holyFishHTML}
        ${soldierFishHTML}
        </div>
        </section>
`
}