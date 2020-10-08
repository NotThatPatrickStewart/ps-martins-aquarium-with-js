// Create the array

const tipCollection [

    { tip: "Those who never lose sight of the shore will never know the terror of being lost at sea",
        author: "Ricky Dryfeet"
},
    {
        tip: "It's always darkest just before it goes pitch black",
        author: "Ol' Blindy"
},
    {
        tip: "Divers do it with the bends",
        author: "Martin"
},
    {
        tip: "Here, fishy fishy fishy fishy",
        author: "Martin"
}

]

// Export the array

export const useTips = () => {
    return tipCollection.slice()
}