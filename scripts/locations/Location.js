export const Location = (locationObj) => {
    return `
    <div class="location">
    <p class="location__name">${locationObj.location}</p>
    <p class="location__image">${locationObj.image}</p>
    <p class="location__collected">${locationObj.collected}</p>
    <p class="location__coordinates">${locationObj.coordinates}</p>
    </div>
    `
}