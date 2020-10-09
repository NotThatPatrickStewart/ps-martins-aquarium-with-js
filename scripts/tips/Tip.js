// Export the function Tips
export const Tips = (tipObj) => {
    // Rendering individual tip objects as HTML
    return `
    <div class="tips">
    <p class="tip__quote">${tipObj.tip}</p>
    <p class="tip__author">-${tipObj.author}</p>
    </div>
    `
}