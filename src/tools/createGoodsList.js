

function shortList(arr) {
    let firstList = [...arr]
    let shortList = [];
    for(let i = 0; i < firstList.length-1; i++) {
        let oneIngr = firstList[i];
        let isHere = false;
        for(let j = i+1; j < firstList.length; j++) {

            if(firstList[i].title.toUpperCase() === firstList[j].title.toUpperCase()) {
                if(firstList[i].ofWhat === firstList[j].ofWhat) {
                    oneIngr.howMany = +oneIngr.howMany + +firstList[j].howMany;
                    firstList.splice(j, 1);
                    isHere = true;
                }
                
            }
        }
        if(isHere) {
            i = i--;
        }
        shortList.push(firstList[i]);

    }
    shortList.push(firstList[firstList.length-1]);
    return shortList;
}

function getIngredients(obj) {
    let menuIngr = [];
    for (let key in obj){
        menuIngr = [...obj[key].ingredients, ...menuIngr]
    }
    return menuIngr
}

function sortBySomething(arr, some) {
     let newArr = arr.sort((a, b) => a[some] > b[some] ? 1 : -1);
     return newArr
  }

function getTitles(obj) {

    let dishesTittleS = [];
    for (let key in obj) {
        dishesTittleS = [...dishesTittleS, obj[key].name]
    }
    return dishesTittleS;
}

function standartList(obj) {
    let titles = getTitles(obj);
    let menuIngr = getIngredients(obj);
    let newIngr = sortBySomething(menuIngr, "goodType");
    let ingrList = shortList(newIngr);
    let newObj = {titles: titles,
                    ingredients: ingrList};
        return newObj;
}



export {standartList, getTitles, sortBySomething, getIngredients, shortList};