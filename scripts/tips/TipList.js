// import from Tips.js and TipsDataProvider
import { Tips } from './Tips.js'
import { useTips } from './TipDataProvider'

// export the function TipList
export const TipList = () => {
    // reference the element
    const contentElement = document.querySelector("travel__quotes")
    const tips = useTips

    let tipsHTMLRepresentations = ""
    for (const tip of tips) {
        tipsHTMLRepresentations += Tips(tip)
    }
    
    // Add to exisiting HTML in the content element
    contentElement.innerHTML += `
    <section class="travel__quotes"
    <h2>Words to Travel By</h2>
    <div class="tipsContainer">
    ${tipsHTMLRepresentations}
    </div>
    </section>
    `
}

// testing to see if adding a line will let me do a new git commit