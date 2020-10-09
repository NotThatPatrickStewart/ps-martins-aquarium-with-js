// Importing useFish function from FishDataProvider
// Commented out, no longer needed
// import { useFish } from './FishDataProvider.js'
import { FishList } from './fish/FishList.js'
// import { useTips } from './tips/TipList.js'
import { TipList } from './tips/TipList.js'

import { LocationList } from './locations/LocationList.js'

// Storing the useFish value in the allThe Fish variable [commented out, duplicated in FishList.js]
// const allTheFish = useFish()

// for/of loop creating fish variable and console logging it [commented out because no longer needed]
// for (const fish of allTheFish) {
//     console.log(fish)
// }   

// Execute the function FishList
FishList()
// Execute the function TipList
TipList()

LocationList()