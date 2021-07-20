import {ingredients, dish, objToArr} from "./dishesCreator";
import addDish from "./addNewDish";
import getDishes from "./getDishes";
import { checkInclude } from "./checkers";


const url = "https://createmenupro-default-rtdb.firebaseio.com/.json";


const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms));





export {ingredients, checkInclude, dish, delay, objToArr, url, addDish, getDishes};