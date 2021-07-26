import {ingredients, dish, objToArr} from "./dishesCreator";
import addDish from "./addNewDish";
import getDishes from "./getDishes";
import { checkInclude } from "./checkers";
import {standartList} from "./createGoodsList";



const url = "https://createmenupro-default-rtdb.firebaseio.com/.json";


const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms));

function newCopyObj(obj) {
    let newObj = {...obj};
    return newObj;
}





export {ingredients, newCopyObj, standartList, objToArr, checkInclude, dish, delay, url, addDish, getDishes};