// Exports the function Fish
export const Fish = (fishObj) => {

    // Rendering individual fish objects as HTML
    return `
    <div class="fish">
        <p>Species:</p>    
        <p class="fish__species">${fishObj.species}</p>
        <p>Name:</p>
        <p class="fish__name">${fishObj.name}</p>
        <p><img class="fish__image image--card"  src="${fishObj.image}"/></p>
        <p>Length:</p>
        <p class="fish__length">${fishObj.length}</p>
        <p>Harvest Location:</p>
        <p class="fish__location">${fishObj.location}</p>
        <p>Diet:</p>
        <p class="fish__diet">${fishObj.diet}</p>
        </div>
    `
}
