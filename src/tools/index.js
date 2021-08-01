import {ingredients, dish, objToArr} from "./dishesCreator";
import addDish from "./addNewDish";
import getDishes from "./getDishes";
import { checkInclude } from "./checkers";
import {standartList, getTitles, sortBySomething, getIngredients, shortList} from "./createGoodsList";
import fastListTool from "./fastListTool";
import sortObjToObj from "./sortObjToObj";
import addComment from "./addComment";



const url = "https://createmenupro-default-rtdb.firebaseio.com/.json";

const urlMess = 'https://commentsformenu-default-rtdb.firebaseio.com/.json';


const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms));

function newCopyObj(obj) {
    let newObj = {...obj};
    return newObj;
}





export {ingredients, fastListTool, getTitles, sortBySomething, getIngredients, sortObjToObj,
    shortList, urlMess, addComment, newCopyObj, standartList, objToArr, checkInclude, dish, delay, url, addDish, getDishes};