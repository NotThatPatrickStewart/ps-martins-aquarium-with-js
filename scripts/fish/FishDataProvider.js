          

// Array of all fish in the collection with key-value pairs
const fishCollection = [
    {
        species: "Boeseman's rainbowfish (Melanotaenia boesemani)",
        name: "Bowie",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Sunny1.jpg",
        length: 5.1,
        location: "",
        diet: "Algae, small crustaceans, and aquatic insects"
    },
    {
        species: "Empire gudgeon (Hypseleotris compressa)",
        name: "King Kong",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Hypseleotris_compressa.jpg",
        length: 4.7,
        location: "Papa New Guinea",
        diet: "Small crustaceans, insects, algae, and aquatic plants"
    },
    {
        species: "Dragon goby/Violet goby (Gobioides broussonnetii)",
        name: "Scoot",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Gobioides_broussonnetii_-_Gobie_violet_-_Aqua_Porte_Dor%C3%A9e_13.JPG",
        length: 3.9,
        location: "Shell Beach (Georgetown, Guyana)",
        diet: "Edible material sifted from substrate"
    },
    {
        species: "Pumpkinseed (Lepomis gibbosus)",
        name: "Pumpkin",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Lepomis_gibbosus_PAQ.jpg",
        length: 11,
        location: "Lake St. Clair (Ontario, Canada)",
        diet: "Insects, mosquito larvae, small molluscs and crustaceans, worms, minnow fry, and other smaller pumpkinseeds"
    }
]

// Exporting the above array as the function useFish, returning .slice so that it creates a new array, and changes to it won't affect the array here
export const useFish = () => {
    return fishCollection.slice()
}