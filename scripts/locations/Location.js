export const Location = (locationObj) => {
    return `
    <div class="location">
        <p class="location__name">${locationObj.location}</p>
        <p><img class="location__image image--card" src="${locationObj.image}"/></p>
        <p class="location__collected">${locationObj.collected}</p>
        <p class="location__coordinates">${locationObj.coordinates}</p>
    </div>
    `
}