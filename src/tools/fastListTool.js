import { objToArr } from "./dishesCreator";
import getDishes from "./getDishes";






async function fastListTool(count) {
    let dishes = await getDishes();
    let dishesArr = objToArr(dishes.data);
    let newObj = {};
    for(let i = 0; i < count; i++) {
        let index = Math.floor(Math.random()* (dishesArr.length-1));
        let oneDish = dishesArr[index];
        newObj[oneDish.id] = oneDish.dish;
        dishesArr.splice(index, 1)
    }
    return newObj;
}

export default fastListTool;
