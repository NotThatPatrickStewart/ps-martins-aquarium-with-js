const locationCollectionArray = [
{
    location: "Ayamaru Lakes",
    info1: "https://www.indonesia-tourism.com/west-papua/raja-ampat/images/ayamaru_lake.jpg",
    collected: "Melanotaenia boesemani",
    coordinates: "-1.265160, 132.200377"
},
{
    location: "Papa New Guinea",
    image: "https://s29081.pcdn.co/wp-content/uploads/2019/11/MADANG-PAPUA-NEW-GUINEA-0229-1.jpg.optimal.jpg",
    collected: "Hypseleotris compressa",
    coordinates: "-2.722089, 135.681953"
},
{
    location: "Shell Beach (Georgetown, Guyana)",
    image: "https://www.bradtguides.com/wp-content/uploads/wysiwyg/destinations/central-and-south-america/guyana/Coconut_Trees_Shell_Beach_Guyana_Marco-Farouk-Basir_Wikimedia.jpg",
    collected: "Gobioides broussonnetii",
    coordinates: "8.291496, -59.498369"
},
{
    location: "Lake St. Clair (Ontario, Canada)",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Lepomis_gibbosus_PAQ.jpg",
    collected: "Lepomis gibbosus",
    coordinates: "42.374453, -82.498557"
}
]

export const useLocation = () => {
    return locationCollectionArray.slice()
}