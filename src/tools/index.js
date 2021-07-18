import {ingredients, dish, objToArr} from "./dishesCreator";
import addDish from "./addNewDish";


const url = "https://createmenupro-default-rtdb.firebaseio.com/.json";


const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms));





export {ingredients, dish, delay, objToArr, url, addDish};