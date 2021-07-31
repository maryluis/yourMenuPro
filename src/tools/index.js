import {ingredients, dish, objToArr} from "./dishesCreator";
import addDish from "./addNewDish";
import getDishes from "./getDishes";
import { checkInclude } from "./checkers";
import {standartList, getTitles, sortBySomething, getIngredients, shortList} from "./createGoodsList";
import fastListTool from "./fastListTool";



const url = "https://createmenupro-default-rtdb.firebaseio.com/.json";


const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms));

function newCopyObj(obj) {
    let newObj = {...obj};
    return newObj;
}





export {ingredients, fastListTool, getTitles, sortBySomething, getIngredients, shortList, newCopyObj, standartList, objToArr, checkInclude, dish, delay, url, addDish, getDishes};