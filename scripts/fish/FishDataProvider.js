

// Array of all fish in the collection with key-value pairs
const fishCollection = [
    {
        species: "Boeseman's rainbowfish (Melanotaenia boesemani)",
        name: "Bowie",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Sunny1.jpg",
        length: 5,
        location: "",
        diet: "Algae, small crustaceans, and aquatic insects"
    },
    {
        species: "Empire gudgeon (Hypseleotris compressa)",
        name: "King Kong",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Hypseleotris_compressa.jpg",
        length: 4,
        location: "Papa New Guinea",
        diet: "Small crustaceans, insects, algae, and aquatic plants"
    },
    {
        species: "Dragon goby/Violet goby (Gobioides broussonnetii)",
        name: "Scoot",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Gobioides_broussonnetii_-_Gobie_violet_-_Aqua_Porte_Dor%C3%A9e_13.JPG",
        length: 3,
        location: "Shell Beach (Georgetown, Guyana)",
        diet: "Edible material sifted from substrate"
    },
    {
        species: "Pumpkinseed (Lepomis gibbosus)",
        name: "Pumpkin",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Lepomis_gibbosus_PAQ.jpg",
        length: 15,
        location: "Lake St. Clair (Ontario, Canada)",
        diet: "Insects, mosquito larvae, small molluscs and crustaceans, worms, minnow fry, and other smaller pumpkinseeds"
    }
]

// Exporting the above array as the function useFish, returning .slice so that it creates a new array, and changes to it won't affect the array here
export const useFish = () => {
    return fishCollection.slice()
}


export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            // console.log(fish)
            holyFish.push(fish)
        }
    }
    // console.log(holyFish)
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const fish of fishCollection) {
        if (fish.length % 5 === 0 && fish.length %3 !== 0) {
            soldiers.push(fish)
        }
        // console.log(soldiers)
        return soldiers
    }
}

    // export const nonHolyFish = () => {
    //     // Any fish not a multiple of 3 or 5
    //     return regularFish
    // }